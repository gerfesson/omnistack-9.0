const mongoose = require('mongoose');

const UserScheema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserScheema);