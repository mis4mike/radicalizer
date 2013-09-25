exports.setup = function(app) {
  app.get('/history/', function (req, res){
    res.render('history/index', {title: 'The Story'});
  })
}