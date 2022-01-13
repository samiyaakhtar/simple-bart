const express = require("express");
const app = express();
const port = 5000;
const request = require('request');
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const BART_URL="https://api.bart.gov/api/etd.aspx?cmd=etd&orig=warm&key=MW9S-E7SL-26DU-VV8V&json=y";

app.get("/", (request, response) => {
    response.send("Hello, Bart!");
});
app.get("/bart", (req, response) => {
    // return fetch(BART_URL).then((res) => {
    //     response.send(res.json().root.station);
    // });

    request(BART_URL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
        response.send(body.root.station);
    });
});

app.listen(port, () => {
    console.log("listening at " + port);
});
