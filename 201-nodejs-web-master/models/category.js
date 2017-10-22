const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cateSchema = new schema({
    type: String,
    items: [{
        type: schema.ObjectId,
        ref: "item"
    }]
})

module.exports = mongoose.model('category', cateSchema);
