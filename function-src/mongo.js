var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};


// Connection URL
var url = 'mongodb://zebramongo:887t2Y3v99wE64w9@ds229373.mlab.com:29373/work_zebra';
var dbname = "work_zebra";
var collectionname = "Test";

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