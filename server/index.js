var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var engine = require('ejs-locals');
var router = require('./routes');
var cors = require('cors');

var app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  limit: '500mb', extended : true
}));
app.use(express.static("public"));
app.use(cors());
app.use('/', router);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(function (req, res, next) {
  res.render('error');
});

var port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is running on port ${ port }`));

module.exports = app;