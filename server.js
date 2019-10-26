const express = require('express');
const mysql = require('mysql');
const hcan = require('html2canvas');
const app = express();
const PORT = 4500;


//create database

app.get("/cdb", (req, res) => {
    
})

app.listen(PORT, () => {
    
    console.log("server running on port: " + PORT);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});