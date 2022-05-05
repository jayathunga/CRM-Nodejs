var express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

var productController=require('../src/products/productController');
var userController=require('../src/user/userController');


//products routes
router.route('/products/getAllData').get(productController.getAllDataFun);
router.route('/products/saveData').post(productController.saveDataFun);
router.route('/products/delete/:id').delete(productController.deleteProduct);
router.route('/products/update/:id').put(productController.updateProduct);
router.route('/products/getOneById/:id').get(productController.getProductData);

//user routes
router.route('/user/create').post(userController.createUser);
router.route('/user/getUserData').get(userController.getUserData);
router.route('/user/login').post(userController.loginUser);

module.exports = router;