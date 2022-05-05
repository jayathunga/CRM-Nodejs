const { response } = require("express");

module.exports.successWithData=(response,Data)=>{
    return response.send({
        status:true,
        data:Data
    });
}

module.exports.errorWithmessage=(response,Msg)=>{
    return response.send({
        status:false,
        message:Msg
    });
}

module.exports.successWithToken=(response,tokenCreated)=>{
    return response.send({
        status:true,
        token:tokenCreated
    });
}
