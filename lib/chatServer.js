const io = require('socket.io');

const chatServer = {
    listen (server) {
        chat = io(server);

        chat.on('connection', (socket) => console.log("connected"))
    }
};

module.exports = chatServer;