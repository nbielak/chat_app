const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const chatServer = require('./lib/chatServer');

const port = 3000;

chatServer.listen(http);

app.use(express.static('public'))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

http.listen(port, () => console.log(`Listening on Port ${port}`));