const mogoose = require('mongoose');

const rawData = require('./constants').RAW_DATA;
const Item = require('../models/item');
const Category = require('../models/category');
const Cart = require('../models/cart');

const models = {
    Item,
    Cart,
    Category
};


function refresh(done) {
    let count = 0;
    Object.keys(rawData).forEach((key,index) => {
        models[key].remove(() => {
            models[key].create(rawData[key], () => {
                if (index === 2) {
                   done();
                }
            })
        });
    });
};


mogoose.connect('mongodb://localhost/supermarket', (err) => {
    if (err) {
        console.log('connect error');
    } else {
        console.log('connect success');
    }
});

refresh(() => {
    process.exit(0);
});