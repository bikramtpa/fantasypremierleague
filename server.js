var express = require('express');
var app = express();
var fs = require('fs')
var cors = require('cors')

//let jsonData = require('./src/datasource/my-team.json');
// app.use(express.static(__dirname + '/public'));
// app.set('view', './src/view');
// app.set('view engine', 'ejs');

app.get('/', cors(), function (request, response) {
    // var text = fs.readFileSync('./src/datasource/my-team.json');
    // var string = text.toString('utf-8')
    let data = JSON.parse(fs.readFileSync('./src/datasource/my-team.json', 'utf-8'))

    //var textByLine = string.split("\n")
    //var textByLine = string.split("\n")
    console.log(data);
    response.send(data);
    // response.render('./src/view/detail-view.ejs', {
    //     textByLines: textByLine
    // })
});

app.listen('8000');