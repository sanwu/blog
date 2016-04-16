
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'public/uploads/' })
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser')
var db = require('./db');

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));


app.post('/postImg', upload.single('img'), function (req, res, next) {
    var tmpFile = path.join(__dirname,req.file.path);
    fs.rename(tmpFile,tmpFile + '.jpg',function(){
        res.json({url:'/uploads/' + req.file.filename + '.jpg'});
    })
})

app.post('/post', function (req, res, next) {
    console.log(req.body);    
    var doc = req.body;
    db.posts.loadDatabase();
    
        db.posts.insert(doc, function (err, newDoc) {   // Callback is optional
            if(err){
                res.json({err:'db error'});
            }else{
                res.json({ok:true});
            }
        });

});

app.get('/api/posts',function(req,res){
    db.posts.loadDatabase();
    db.posts.find({}, function (err, docs) {
             if(err){
                res.json({err:'db error'});
             }else{
                 res.json({data:docs})
             }
    });

 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});