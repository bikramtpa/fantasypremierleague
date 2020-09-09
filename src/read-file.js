'use strict';
// this file is for a separate practice

const fs = require('fs');

fs.readFile('./Datasource/my-team.json', (err, data) => {
    if (err) throw err;
    let playerdata = JSON.parse(data);
    console.log(playerdata);
});

console.log('This is after the read call');