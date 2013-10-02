var db = require('../../lib/db');
var mongoose = db.mongoose;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var institutionSchema = Schema({
  name: String,
  type: String,
  startEra: String,
  relevance: [],
  ratings: [],
  description: String,
  diagram: String,
  responses: [response]
});

var response = Schema({
  text: String
});

exports.getByName = function(name) {
  this.find({ name: name }).limit(1).exec(function (err, result) {
    if (!err) {
      callback(null, result[0]);
    } else {
      callback (err, null);
    }
  });
}

exports.createInstitution = function( name, 
                                      type, 
                                      startEra, 
                                      relevance, 
                                      diagram,
                                      description) {
  var Institution = mongoose.model('Institution', institutionSchema);

  var newInstitution = new Institution ({ name: name,
                                          type: type,
                                          startEra: startEra,
                                          relevance: relevance,
                                          ratings: [],
                                          description: description, 
                                          diagram: diagram,
                                          responses: [] });

  newInstitution.save(function (err) {if (err) console.log ('Error on save!')});
  return newInstitution
}