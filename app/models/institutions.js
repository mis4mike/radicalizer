var db = require('../../lib/db');
var mongoose = db.mongoose;
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var institutionSchema = new Schema({
  name: String,
  type: String,
  relevance: [],
  ratings: [],
  description: String,
  diagram: String,
  responses: [response]
});

var response = Schema({
  text: String
});

exports.getByName = function(name, req, res) {
  var Institution = mongoose.model('Institution', institutionSchema);
  Institution.find({name: name}).exec(function (err, result) {
    if (!err) {
      res.send(JSON.stringify(result[0]));
    } else {
      res.send(JSON.stringify( err ));
    }
  });
}

exports.createInstitution = function( name, 
                                      type, 
                                      relevance, 
                                      diagram,
                                      description) {
  var Institution = mongoose.model('Institution', institutionSchema);
  var newInstitution = new Institution ({ name: name,
                                          type: type,
                                          relevance: relevance,
                                          ratings: [],
                                          description: description, 
                                          diagram: diagram,
                                          responses: [] });

  newInstitution.save(function (err) {if (err) console.log ('Error on save!')});
  return newInstitution
}