
const { response } = require('express');
var productService = require('./productService');
var responseService = require('../../services/responseService');

//get all data from database
module.exports.getAllDataFun = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    // res.setHeader('Access-Control-Allow-Credentials', true);

    var AllData = await productService.getAllProducts();
    console.log(AllData);
    if (AllData) {
        responseService.successWithData(res, AllData);

    }
    else {
        responseService.errorWithmessage(res, "Error getting data");
    }

};

//create new product data in database
module.exports.saveDataFun = async (req, res) => {
    console.log(req.body);
    var result = await productService.createProduct(req.body);
    if (result) {
        responseService.successWithData(res, "Data saved successfully fuckers");

    }
    else {
        responseService.errorWithmessage(res, "Error saving data idiots")
    }
};

//delete product using id
module.exports.deleteProduct = async (req, res) => {
    console.log(req.params.id);
    var result = await productService.deleteProduct(req.params.id);
    if (result) {
        responseService.successWithData(res, "product delete successfully");
    }
    else {
        responseService.errorWithmessage(res, "Error deleting product ");
    }
}

//update product data
module.exports.updateProduct = async (req, res) => {
    var result = await productService.updateProduct(req.params.id, req.body);
    if (result) {
        responseService.successWithData(res, "product update successfully");
    }
    else {
        responseService.errorWithmessage(res, "Error in update data");
    }
}

module.exports.getProductData = async (req, res) => {
    var data = await productService.getProductData(req.params.id);
    if(data){
        responseService.successWithData(res,data);
    }
    else{
        responseService.errorWithmessage(res,"Error getting data");
    }

}