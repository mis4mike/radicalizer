exports.setup = function (app) {

  app.get('/', function(req, res) {
    res.render('index', {title:"Radicalizer"});
  });

  app.get('/credits/', function(req,res) {
    res.render('credits', {title: "Thanks"});
  })
}