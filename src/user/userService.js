
const userModel = require('./userModel');
var jwt = require('jsonwebtoken');


module.exports.createUser = (bodyObject) => {
    return new Promise(async (resolve, reject) => {
        var userModelData = new userModel();
        userModelData.email = bodyObject.email;
        userModelData.password = await userModelData.encryptMethod(bodyObject.password);
        userModelData.name = bodyObject.name;
        userModelData.save((error) => {
            if (error) {
                reject(false);
            }
            else {
                resolve(true);
            }
        });
    });
}

module.exports.getUserData = (req, res) => {
    return new Promise((resolve, reject) => {
        userModel.find({}, (error, data) => {
            if (error) {
                reject(false);
            }
            else {
                resolve(data);
            }
        });
    });
}

/**
 * 
 * @param {*} bodyObject 
 * @returns login user validation
 */
module.exports.loginUser = (bodyObject) => {
    return new promise((resolve, reject) => {
        userModel.findOne({ email: bodyObject.email }, (error, userdata) => {
            if (error) {
                reject(false);
            }
            else {
                if (userdata) {
                    var userModelData = new userModel();
                    var dycriptresult =  userModelData.dycrptMethod(userdata.password);
                    if (dycriptresult == bodyObject.password) {
                        var tokenCreated='987447kjd^&^*isjkshddkdls92';
                        resolve(tokenCreated);
                    } else {
                        resolve(false);
                    }
                }
                else {
                    resolve(false);
                }
            }
        });
    });
}

var createToken=function myToken(user){
    try{
        const jwtToken=jwt.sign();
        

    }catch{

    }

}