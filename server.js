if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

var express = require('express');
var app = express();
var fs = require('fs')
var cors = require('cors')
const bcrypt = require('bcrypt')
var bodyParser = require('body-parser');

// app.use(express.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
})

const {
    expressCspHeader,
    INLINE,
    NONE,
    SELF
} = require('express-csp-header');

app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': ['data:', 'images.com'],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}));

// express will send header "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' somehost.com; style-src 'self' mystyles.net; img-src data: images.com; workers-src 'none'; block-all-mixed-content; report-uri https://cspreport.com/send;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

const users = []
app.get('/users/', (req, res) => {
    res.json(users)
})

app.post('/users/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {
            name: req.body.name,
            password: hashedPassword
        }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name == req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

/* that was for user */



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
app.get('/fixtures', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/fixtures.json', 'utf-8'))
    response.send(eventsdata);
});
app.get('/gameweeks', cors(), function (request, response) {
    let eventsdata = JSON.parse(fs.readFileSync('./src/datasource/gameweeks.json', 'utf-8'))
    response.send(eventsdata);
});


app.listen('8000');