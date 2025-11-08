const bodyParser = require("body-parser");
const express = require("express");

const registerRoutes = require("./routes/patientRegiser").routes;

const mongoConnect = require("./utills/database").mongoConnect;

const app = express();

const port = 3000;

app.use(express.json());

app.use(registerRoutes);

mongoConnect(client => {
    app.listen(port);
})