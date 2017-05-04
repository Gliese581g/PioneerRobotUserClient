//dependencies
var express = require('express');
var path = require('path');

//variables
var publicPath = path.join(__dirname, 'public');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, 'public')));

//index.html routing
app.get('/', function(req, res){
	res.sendFile(publicPath + "/index.html");
});

//showing that the program is running on the RUN_PORT
app.listen(app.get('port'));
