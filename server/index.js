const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tlala22:Learn2019@cluster0.gpsln.mongodb.net/merntutorial?retryWrites=true&w=majority");

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});