const mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemSchema = new schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('item', itemSchema);

