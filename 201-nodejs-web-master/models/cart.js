const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cartSchema = new schema({
    user: String,
    items: [{
        count: Number,
        item: {
            type: schema.ObjectId,
            ref: 'item'
        }
    }]
});

module.exports = mongoose.model('cart', cartSchema);
