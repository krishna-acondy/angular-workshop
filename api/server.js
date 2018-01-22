var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var stories      = require('./stories').stories;
require('array.prototype.find').shim();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    next();
  });

var port = process.env.PORT || 666;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to the story api!' });
});

router.get('/stories', function(req, res) {
    res.json({ stories });
});

router.get('/stories/:id', function(req, res) {
    res.json({ story: stories.find((s) => s.id === parseInt(req.params.id))});
});

router.put('/stories/:id', function(req, res) {
    const index = stories.indexOf(stories.find((s) => s.id === req.body.id));
    stories[index] = req.body;
    res.json({ story: stories[index] });
});

app.use('/api', router);

app.listen(port);
console.log('The magic happens on port ' + port);