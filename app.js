const bodyParser = require("body-parser");
const express = require("express");

const registerRoutes = require("./routes/patientRegiser").routes;
const dashBoardRoutes = require("./routes/patientDashboard").routes;

const mongoConnect = require("./utills/database").mongoConnect;

const app = express();

const port = 3000;

app.use(express.json());

app.use(registerRoutes);
app.use(dashBoardRoutes);

mongoConnect(client => {
    app.listen(port);
})