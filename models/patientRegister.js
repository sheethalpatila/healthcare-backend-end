const getDB = require("../utills/database").getDB;
const mongodb = require("mongodb")

module.exports = class User {
    constructor(userName, email, phNum) {
        this.userName = userName;
        this.email = email;
        this.phNum = phNum;
    }
    save() {

        const db = getDB();
        return db.collection("patients").insertOne(this);
    }

    static fetchAll() {
        const db = getDB();
        return db.collection("users").find().toArray();
    }

    static findById(id) {
        const db = getDB();
        id = new mongodb.ObjectId(id);
        return db.collection("users").findOne({_id: id})
    }

    static updateUser(reqBody, id) {
        const db = getDB();
        id = new mongodb.ObjectId(id);
        this.findById(id)
        .then(response => {
            console.log("update",response)
        })
        .then(jsonResponse => {
            const data = jsonResponse.JSON()
            console.log("data",data)
        })
        .catch(err => {
            console.log(err);
        })
    }
}