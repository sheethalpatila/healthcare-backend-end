const express = require("express");
const router = express.Router();

const userController = require("../controllers/patientRegister");

router.get("/patients", userController.getPatients);
router.post("/register/patient", userController.postPatient);
router.get("/user/:userId", userController.getUniqueUser);
router.patch("/user/:userId", userController.updateUser);

exports.routes = router;