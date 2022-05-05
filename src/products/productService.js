const { validate } = require('./productModel');
var productModel = require('./productModel');

module.exports.getAllProducts = (req, res) => {
    return new Promise((resolve, reject) => {
        productModel.find({}, (error, data) => {
            if (error) {
                reject(false);
            }
            else {
                resolve(data);
            }
        });
    });
}

module.exports.createProduct = (bodyObject) => {
    return new Promise((resolve, reject) => {
        var productModelData = new productModel();
        productModelData.name = bodyObject.name;
        productModelData.description = bodyObject.description;
        productModelData.price = bodyObject.price;
        productModelData.Address = bodyObject.Address;
        productModelData.save((error) => {
            if (error) {
                reject(false);
            }
            else {
               resolve(true);
            }
        });
    });
}

module.exports.deleteProduct=(productId)=>{
    return new Promise((resolve,reject)=>{
        productModel.findByIdAndDelete(productId,(error)=>{
            if(error){
                reject(false);
            }
            else{
                resolve(true);
            }
        })
    });
}

module.exports.updateProduct=(productId,bodyObject)=>{
    return new Promise((resolve,reject)=>{
        productModel.findByIdAndUpdate(productId,bodyObject,(error,data)=>{
            if(error){
                reject(false);
            }
            else{
                resolve(data);
            }
        });
    });
}

module.exports.getProductData=(productId)=>{
    return new Promise((resolve,reject)=>{
        productModel.findById(productId,(error,dataValue)=>{
            if(error){
                reject(false);
            }
            else{
                resolve(dataValue);
            }
        });
    });
}