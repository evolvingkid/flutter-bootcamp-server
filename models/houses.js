const mongoose = require('mongoose');

const House = new mongoose.Schema({
    houseName: { type: String },
    imageURL: { type: String },
    numbOfBedRoom: { type: Number },
    isHallAvaliable: { type: Boolean },
    isDinningRoom: { type: Boolean },
    isKitchen: { type: Boolean },
    description: { type: String }
});
module.exports = User = mongoose.model('House', House);