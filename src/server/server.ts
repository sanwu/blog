/// <reference path="tsd.d.ts" />

import * as express from 'express'
import * as multer from 'multer'
import * as path from 'path';
import * as fs from 'fs';
import * as db from 'db';
import * as bodyParser from 'body-parser'
import {config} from 'config';
import {api as dapi} from 'discourse'
var upload = multer({ dest: config.uploadPath })

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));


app.post('/postImg', upload.single('img'), function (req, res, next) {
    var tmpFile = path.join(__dirname, req.file.path);
    fs.rename(tmpFile, tmpFile + '.jpg', function () {
        res.json({ url: config.webAccessUploadURI + req.file.filename + '.jpg' });
    })
})

app.post('/post', function (req, res, next) {
    console.log(req.body);
    var doc = req.body;
    db.posts.loadDatabase();

    db.posts.insert(doc, function (err, newDoc) {   // Callback is optional
        if (err) {
            res.json({ err: 'db error' });
        } else {
            res.json({ ok: true });
        }
    });

});

app.get('/api/posts', function (req, res) {
    // db.posts.loadDatabase();
    // db.posts.find({}, function (err, docs) {
    //          if(err){
    //             res.json({err:'db error'});
    //          }else{
    //              res.json({data:docs})
    //          }
    // });

    dapi.getCategoryLatestTopic('share', {}, function (err, body, httpCode) {
        // make assertions
        console.log(arguments)
        var json = JSON.parse(body);
        res.json(json)
    });
})

//TODO:尝试后端渲染react页面
app.get('/posts',function(req,res){

})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});