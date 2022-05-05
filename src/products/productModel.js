var mongoose=require('mongoose');
var schema=mongoose.Schema;

var productSchema=new schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('productData',productSchema);