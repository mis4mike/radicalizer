exports.setup = function (app) {

  app.get('/institutions/', function(req, res) {
    if(!req.query.name){
      radicalizer.institutions.getByName(null, req, res);
    } else {
      radicalizer.institutions.getByName(req.query.name, req, res);
    }
  });
  app.get('/institutions/list/', function(req, res) {
      radicalizer.institutions.getList(req, res);
  });
  app.get('/institutions/create/', function(req, res) {
    res.render('institutions/create', {title:'Make a New Insitution'});
  });

  app.get('/institutions/create/submit', function(req, res) {
    console.log(radicalizer.institutions);
    var institution = radicalizer.institutions.createInstitution(req.param('name'), 
                                  req.param('type'), 
                                  req.param('relevance'), 
                                  req.param('startEra'), 
                                  {},
                                  req.param('description'));
    console.log(institution)
    res.render('institutions/', {title: req.params.name, institution: institution });
  });

}