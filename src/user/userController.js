var userService = require('./userService');
var responseService = require('../../services/responseService');

//create new user
module.exports.createUser = async (req, res) => {
    var result = await userService.createUser(req.body);
    if (result) {
        responseService.successWithData(res, "User saved successfully");
    }
    else {
        responseService.errorWithmessage(res, "Error saving data");
    }
}

//get all user details
module.exports.getUserData = async (req, res) => {
    var data = await userService.getUserData();
    if(data){
        responseService.successWithData(res,data);
    }
    else{
        responseService.errorWithmessage(req,"Error getting user data");
    }
}

//login user request
module.exports.loginUser=async(req,res)=>{
    var result=await userService.loginUser(req.body);
    if(result){
        responseService.successWithToken(res,result);
    }
    else{
        responseService.errorWithmessage(res,"Error Login user");
    }
}