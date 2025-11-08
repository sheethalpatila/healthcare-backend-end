const express = require("express");


function doctorsList(doctorListAPIURL) {
    Promise(doctorListAPIURL)
    .then(response => {
        return response
    }).then(jsonData => {
        return jsonData.json()
    })
    .catch(err => {
        return err;
    })
}

exports.doctorListService = doctorsList;