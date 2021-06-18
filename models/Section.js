const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    tittle: {type: String, unique: true, required: true},
    messages: [{type: Types.ObjectId, ref: 'Message'}],
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Section', schema);