var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};


// Connection URL

var url = 'mongodb://sashimi_db:7dmsckiU3rAyTm3t9866E693Jqh@sashimi-shard-00-00-obkvq.mongodb.net:27017,sashimi-shard-00-01-obkvq.mongodb.net:27017,sashimi-shard-00-02-obkvq.mongodb.net:27017/test?ssl=true&replicaSet=Sashimi-shard-0&authSource=admin&retryWrites=true';
var dbname = "inshow";
var collectionname = "chat";

exports.handler = (event, context, callback) => {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        var dbo = db.db(dbname);
        dbo.collection(collectionname, function (err, collection) {
            collection.find().toArray(function (err, items) {
                if (err) throw err;
                console.log(items);
                callback(null, {
                    statusCode,
                    headers,
                    body: JSON.stringify(items)
                });
            });
            db.close();
        });
    });
    // TODO implement
    //callback(null, 'Connecting to mongo');
};