var mongoose = require('mongoose');


var loginuserSchema = mongoose.Schema({
    username: String,
    password: String
});



module.exports = mongoose.model('Userlogin', loginuserSchema);