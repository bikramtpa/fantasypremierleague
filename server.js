var express = require('express');
var app = express();
var fs = require('fs')
var cors = require('cors')

app.get('/datas', cors(), function (request, response) {
    let data = JSON.parse(fs.readFileSync('./src/datasource/my-team.json', 'utf-8'))
    // console.log(data);
    response.send(data);
});

app.get('/events', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/events.json', 'utf-8'))
    // console.log(data);
    response.send(eventsdata);
});


app.listen('8000');