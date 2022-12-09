const express = require('express');

const router = express.Router();

const fs = require('fs');

const pdffile = fs.readFileSync('Statement_1650907045015.pdf');


const pdfparse = require('pdf-parse');

router.get('/', function(req,res){
    res.render('home')});



router.post('/Upload', function(req,res){

    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        
        console.log(filename)

        file.mv('./uploads/'+filename, function(err){
            if (err){
                res.send(err)
            }
            else {
                res.render('Extract')
            }

        } )
       
    }

})

router.post('/Extract', function(req,res){

    pdfparse(pdffile).then(function(data){

        return res.send(data.text)
       
    })

})

module.exports = router;