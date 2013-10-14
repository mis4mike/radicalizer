/*var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/radicalizer');*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;
module.exports.ObjectId = ObjectId;

// Connect to database

var username = "";
var password = "";
var address = 'localhost:27017/radicalizer';
connect();

// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + '@' + address;
  mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}
