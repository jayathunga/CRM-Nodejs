var mongoose = require('mongoose');
var schema = mongoose.Schema;

var key = '923973%$&&^^&9###***@#$jdd1234';
var encryptor = require('simple-encryptor')(key);

var userSchema = new schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

//encrypt password
userSchema.methods.encryptMethod =  (password) => {
    const encryptedString = encryptor.encrypt(password);
    return encryptedString;
};

//decrypt password
userSchema.methods.dycrptMethod =  (encryptedString) => {
    const decryptedString = encryptor.decrypt(encryptedString);
    return decryptedString;
};

module.exports = mongoose.model('User', userSchema);