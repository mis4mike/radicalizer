exports.setup = function (app) {

  app.get('/institutions/', function(req, res) {
    res.render('institutions/index', {title:"The Pieces"});
  });

}