const express = require('express');
const mysql = require('mysql');
const hcan = require('html2canvas');
const app = express();
const PORT = 4500;


//create database
hcan.html2canvas("<h1> hello </h1>").then(canvas => {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(canvas.toDateURL('image/png'), 'PNG', 0, 0, 211, 298);
    pdf.save(filename);
})
app.get("/cdb", (req, res) => {
    
})

app.listen(PORT, () => {
    
    console.log("server running on port: " + PORT);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});