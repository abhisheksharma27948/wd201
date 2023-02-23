const express = require('express');
const path = require('path');
const app = express();

// Accept a port number from command line arguments or use 3000 as default
const port = process.argv[2] || 3000;

app.use(express.static(path.join(__dirname)));

// Serve the project.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project.html'));
});

// Serve the registration.html file at the /registration URL
app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
