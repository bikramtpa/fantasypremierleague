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

app.get('/elements', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/elements.json', 'utf-8'))
    response.send(eventsdata);
});
app.get('/my-team', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/my-team.json', 'utf-8'))
    response.send(eventsdata);
});
app.get('/gamesettings', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/gamesettings.json', 'utf-8'))
    response.send(eventsdata);
});
app.get('/bootstrap-static', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/bootstrap-static.json', 'utf-8'))
    response.send(eventsdata);
});


app.listen('8000');