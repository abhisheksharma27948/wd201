const express = require('express');
const path = require('path');
const app = express();
const port = process.argv[process.argv.indexOf('--port') + 1] || 3000;

// Define routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/project', function (req, res) {
    res.sendFile(path.join(__dirname, 'project.html'));
});

app.get('/registration', function (req, res) {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Serve static files
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});
