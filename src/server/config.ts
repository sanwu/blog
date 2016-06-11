import * as path from 'path'
var jsonfile = require('jsonfile')
export var config = {
    dbPath:path.join('./','./db'),
    uploadPath:'public/uploads/',
    webAccessUploadURI:'/uploads/'
}

var discourseConfigFile = path.join(process.cwd(),'discourse.config.json');
console.log(discourseConfigFile)
export var discourseConfig = jsonfile.readFileSync(discourseConfigFile);
console.log(discourseConfig)