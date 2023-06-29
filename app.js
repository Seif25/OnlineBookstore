
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
 app.use(bodyParser.json());

 


app.get('/' ,function(req, res){
    res.render('login');
});

app.post('/', function(req,res){
    var x = req.body;
    console.log(x);
});

app.post('/home' ,function(req, res){
  res.render('home');
});
app.get('/dune' ,function(req, res){
    res.render('dune');
});
app.get('/fiction' ,function(req, res){
    res.render('fiction');
});
app.get('/files' ,function(req, res){
    res.render('files');
});
app.get('/grapes' ,function(req, res){
    res.render('grapes');
});
app.get('/leaves' ,function(req, res){
    res.render('leaves');
});
app.get('/mockingbird' ,function(req, res){
    res.render('mockingbird');
});
app.get('/novel' ,function(req, res){
    res.render('novel');
});
app.get('/poetry' ,function(req, res){
    res.render('poetry');
});
app.get('/readlist' ,function(req, res){
    res.render('readlist');
});
app.get('/registration' ,function(req, res){
    res.render('registration');
});
app.get('/searchresults' ,function(req, res){
    res.render('searchresults');
});
app.get('/sun' ,function(req, res){
    res.render('sun');
});

if(process.env.PORT) {
    app.listen(process.env.PORT, function(){console.log('Server started')});
}
else{
    app.listen(3000,function(){console.log('Server started on port 3000')});
}