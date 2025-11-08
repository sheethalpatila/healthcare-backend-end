const DoctorService = require("../services/providersDashboard");

exports.getDoctorsList = (req, res, next) => {
    DoctorService.doctorListService(process.env.doctorListAPIURL)
}