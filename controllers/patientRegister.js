const UserModel = require("../models/patientRegister");

exports.postPatient= (req, res, next) => {
    const reqBody = req.body;
    console.log(reqBody);
    const userName = reqBody.userName;
    const email = reqBody.email;
    const phNum = reqBody.phNum;
    const addUser = new UserModel(userName, email, phNum);
    addUser.save()
    .then(response => {
        res.status(201).send(response)
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getPatients = (req, res, next) => {
    UserModel.fetchAll()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getUniqueUser = (req, res, next) => {
    const userId = req.params.userId;
    UserModel.findById(userId)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(err => {
        console.log(err);
    })
}

exports.updateUser = (req, res, next) => {
    console.log("urllll", req.url);
    const reqBody = req.body;
    const id = req.params.id
    UserModel.updateUser(reqBody, id)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err);
    })
}