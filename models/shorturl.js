const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortUrlSchema = new Schema({
    url: {type: String, unique: true},
    link: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Shorturl', shortUrlSchema);
