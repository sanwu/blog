
import {discourseConfig} from 'config'
var Discourse = require('discourse-api');
export var api = new Discourse(discourseConfig.url, discourseConfig.api.key, discourseConfig.api.username);

