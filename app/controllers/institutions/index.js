exports.setup = function (app) {

  app.get('/institutions/', function(req, res) {
    res.render('institutions/index', {title:'The Pieces'});
  });

  app.get('/institutions/create/', function(req, res) {
    res.render('institutions/create', {title:'Make a New Insitution'});
  });

  app.get('/institutions/create/submit', function(req, res) {
    console.log(radicalizer.institutions);
    var institution = radicalizer.institutions.createInstitution(req.param('name'), 
                                  req.param('type'), 
                                  req.param('startEra'), 
                                  req.param('relevance'), 
                                  req.param('description'));
    console.log(institution)
    res.render('institutions/', {title: req.params.name, institution: institution });
  });

}