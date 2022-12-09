const express = require('express');

const app = express();

const port = 8000;
const router = require('./routes/index');
const upload = require('express-fileupload');

const cookieParser = require('cookie-parser');

app.use(upload());
const db = require('./config/mongoose');
const fs = require('fs');
const pdfparse = require('pdf-parse');

//some changes are required here






app.use(express.urlencoded({extended:true }));
app.use(cookieParser());

app.set('view engine', 'ejs');



app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if (err){
        console.log(error, "Error found in running server")
    }
    console.log("Server is running on port:", port)
})