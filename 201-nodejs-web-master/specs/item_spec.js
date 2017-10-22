const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app);
const LOGIN_INFO = require('../config/constants');

var assert = chai.assert;

var id = 0;
var authStr = "Basic YWRtaW46YWRtaW4=";


describe('/items', function () {
    it('get all items', function (done) {
        request.get('/items')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .end(function (err, res) {
                if (err) return done(err);
                assert.isArray(res.body.item, 'return items object');
                done();
            });
    });

    it('create one item', function (done) {
        console.log(authStr);

        request.post('/items').send({
            "name": "computer",
            "price": 6000
        }).set('Accept', 'application/json').set('Authorization', authStr).expect(202)
            .end(function (err, res) {
                    assert.isObject(res.body, 'create object');
                    id = res.body._id;
                    done();
                }
            )
    })

    it('update a item', function (done) {
        url = '/items/' + id;
        request.put(url)
            .send({
                "name": "computer",
                "price": 7000
            }).set('Authorization', authStr).expect(204)
            .end(done);
    })

    it('get one item', function (done) {
        url = '/items/' + id;
        request.get(url)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                assert.isObject(res.body, 'return items object');
                done();
            });
    })

    it('delete one item', function (done) {
        url = '/items/' + id;
        request.delete(url)
            .set('Accept', 'application/json').set('Authorization', authStr)
            .expect(204)
            .end(done);
    })
})

;