// import { initWebsocketServer } from "./SocketLibrary";
const { initWebsocketServer } = require('websocket-decorator-server');
const handleGame = require('./game');
const { handleRooms } = require('./rooms');
const handleUsers = require('./users');

const server = initWebsocketServer({ port: 5000 });

server.connection(function connection(socket) {
	handleUsers(socket);
	handleRooms(socket);
	handleGame(socket);
});