var Datastore = require('nedb');
import * as path from 'path';
import {config} from 'config';
export var posts = new Datastore({
    filename: path.join(config.dbPath, 'db/posts.db')
})



