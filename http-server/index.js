const express = require('express');
const app = express();
const port = process.argv[3] || 3000;
const args = require('vscode-minimist')(process.argv.slice(2));

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});

app.get('/project', function (req, res) {
    res.sendFile(__dirname + '/project.html');
});

app.get('/registration', function (req, res) {
    res.sendFile(__dirname + '/registration.html');
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});
