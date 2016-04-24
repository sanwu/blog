

var requirejs = require('requirejs');

requirejs.config({
    //把node自身的require方法传递给requirejs
    nodeRequire: require
});

requirejs(["./build/server.js"], function () { 
    requirejs(['src/server/server'],function(){
        
    })
});


