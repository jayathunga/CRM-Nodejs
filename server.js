var expressLib = require('express');
var mongooseLib = require('mongoose');
var router = require('./routes/routes');

//express library assign to variable
var server = expressLib();

//convert to jason format
server.use(expressLib.json());

//use routes API in server file
server.use(router);

//server port
server.listen(3000, (error) => {
    if (error) {
        console.log("Error");
    }
    else {
        console.log("server started");
    }
});

//MongoDB connection
mongooseLib.connect('mongodb://localhost:27017/crm-db',  (error) => {
    if (error) {
        console.log("error");
    }
    else {
        console.log("DB connected");
    }
});






