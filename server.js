//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan'),
    bodyParser = require('body-parser')
    User = require('./model/User'),
    RegisterHandler = require('./handler/RegisterHandler');


Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD']
      mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}
//mongoURL = "mongodb://swaggernodemongo:swaggernodemongo@ds055855.mlab.com:55855/swaggernodemongo";
//mongoURL = "mongodb://fdmdbuser:fdmdbpwd@mdb-feedbackdo.193b.starter-ca-central-1.openshiftapps.com:27017/fddb";
mongoURL = "mongodb://fdmdbuser:fdmdbpwd@ds241065.mlab.com:41065/fddb"
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  console.log("inside initDB");
  if (mongoURL == null) return;
  console.log("mongoURL: "+ mongoURL);
  var mongodb = require('mongoose');
  if (mongodb == null) return;
  mongodb.Promise  = require('bluebird');
  //mongodb.connect(mongoURL, function(err, conn) {
    //if (err) {
    //  callback(err);
    //  return;
    //}

    //db = conn;
    db =  mongodb.connect(mongoURL,{
			  useMongoClient: true,
			  /* other options */
			});
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  //});

  //mongodb.connect(mongoURL);

};

app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    var col = db.collection('counts');
    // Create a document with request IP and current time of request
    col.insert({ip: req.ip, date: Date.now()});
    col.count(function(err, count){
      res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
    });
  } else {
    res.render('index.html', { pageCountMessage : null});
  }
});

app.get('/pagecount', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  if (!db) {
    initDb(function(err){});
  }
  if (db) {
    db.collection('counts').count(function(err, count ){
      res.send('{ pageCount: ' + count + '}');
    });
  } else {
    res.send('{ pageCount: -1 }');
  }
});

app.post('/register', function (req, res){
    console.log("inside regiser post" + db);
    res.setHeader('Content-Type', 'application/json');
    if (!db) {
      console.log("!db");
      initDb(function(err){});
    }
    var handler = new RegisterHandler();
    var response = handler.handleRequest('REGISTER', db, req, res);
    //res.send (response);
});
//app.get('/register', function (req, res) {
//  console.log ("inside register");
//  res.send('{flag: "you are registered"}');
//});



// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
