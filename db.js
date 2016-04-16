var Datastore = require('nedb');
var path = require('path');
db = {};
db.posts = new Datastore({ 
    filename: path.join(__dirname,'db/posts.db')
});

module.exports = db;