const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    url: String,
    filename: String,
});

module.exports = mongoose.model('File', fileSchema);
