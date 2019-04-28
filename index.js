var mongojs = require('mongojs');


const db = mongojs("mongodb://ab_ibrahima:FR2DwqIROWHmLlgX@cluster0-shard-00-02-zl8ja.mongodb.net:27017,cluster0-shard-00-00-zl8ja.mongodb.net:27017,cluster0-shard-00-01-zl8ja.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true")

var id = Math.floor(Math.random() * 100000);
var collname = "test" + id;

function getNumberInfo (number) {
    let info = {}
    info.double = number * 2;
    info.triple = number * 3;
    info.div2 = number % 2 == 0;
    info.div5 = number % 5 == 0;
    info.square = number * number;
    return info;
}

db.createCollection(collname,{});

console.log("collection "+collname+" created\n")

for (let i =0; i<1000; i++) {
    console.log("insert   " + i)
    db.collection(collname).insert(getNumberInfo(i));
}

console.log(collname + " filled");

db.collection(collname).findOne({}, (err,doc) => {
  console.log(doc);

})

console.log("done")
