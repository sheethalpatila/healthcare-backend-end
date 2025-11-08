const mongoDB = require("mongodb");
const mongoClient = mongoDB.MongoClient;

let _db;

const mongoConnect = callback => {
    //mongoClient.connect("mongodb+srv://sindhusidhi21:LIoAZw1Er4GA2bbJ@ecom-cluster.mejzzni.mongodb.net/hclhealthcareportal?retryWrites=true&w=majority&appName=ecom-cluster")
    mongoClient.connect("mongodb://localhost:27017/healthcare")
    .then(client => {
        _db = client.db();
        callback(client)
    })
    .catch(err => {
        console.log(err);
    })
}

const getDB = () => {
    if(_db) {
        return _db
    }
    throw "No Database"
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;