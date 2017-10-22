const HTTPCode = require('../config/constants');
const cartModel = require('../models/cart');

function getUser(req, res, next) {
    var auth = req.headers['authorization'];
    var parts = auth.split(' ');
    var encoded = parts[1] || ''; // dXNlcjpwYXNz
    var decoded = new Buffer(encoded, 'base64').toString('utf-8').split(":");
    var user = decoded[0];
    return user;
}

module.exports = class cartController {


    getAllCarts(req, res, next) {

        if (getUser(req) !== 'admin') {
            return res.sendStatus(HTTPCode.PREMISSTION_DEINED)
        }
        cartModel.find({}).exec((e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.OK).send(data);
        })
    }

    getOneCart(req, res, next) {
        const id = req.params.cartId;
        let user = getUser(req);
        cartModel.findById(id).exec((e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }

            if (user !== data.user && user !== 'admin') {
                return res.sendStatus(HTTPCode.PREMISSTION_DEINED);
            }
            return res.status(HTTPCode.OK).send(data)
        })
    }

    createOneCart(req, res, next) {
        cartModel.create(req.body, (err, data) => {
            if (err) {
                return next(err);
            }
            return res.status(HTTPCode.CREATED).send(data);
        })
    }

    updateOneCart(req, res, next) {
        const id = req.params.cartId;
        const newValue = req.body;
        cartModel.findByIdAndUpdate(id, newValue, (e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.sendStatus(HTTPCode.NO_CONTENT);
        })
    }

    deleteOneCart(req, res, next) {
        const id = req.params.cartId;
        cartModel.findByIdAndRemove(id, (e, data) => {
            if (e) {
                return next(e);
            }
            if (!data) {
                return res.sendStatus(HTTPCode.NOT_FOUND);
            }
            return res.status(HTTPCode.NO_CONTENT).send(data);
        })
    }

}
