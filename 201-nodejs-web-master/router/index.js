const carts = require('./routers/carts');
const categorys = require('./routers/categories.js');
const items = require('./routers/items');

module.exports= function(app) {
    app.use('/items',items);
    app.use('/categories',categorys);
    app.use('/carts',carts);
}