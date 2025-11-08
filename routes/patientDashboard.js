const express = require("express");
const router = express.Router();

const patinetDashboardController = require("../controllers/patientDashboard");

router.get("/doctorList", patinetDashboardController.getDoctorsList);

exports.routes = router;