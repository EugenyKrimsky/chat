const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    number: {type: Number, required: true, unique: true},
    message: {type: String, required: true},
    date: {type: String, required: true},
    section: {type: Types.ObjectId, ref: 'Section'}
})

module.exports = model('User', schema);