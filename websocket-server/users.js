const User = require("./User");

const userList = [];

function handleUsers(socket) {
  socket.on('checkUser', data => {
		if (!data || typeof data !== 'object') {
			const newUser = new User(socket);
			userList.push(newUser);
			socket.emit('saveUser', newUser.prepareToSend());
			return;
		}
		
		const { id } = data;
		if (typeof id !== 'string') return;
		
		const userIsAccountedFor = userList.some(user => user.id === id);
		if (!userIsAccountedFor) {
			userList.push(data);
		}
		socket.emit('userIsConnected', data);
	});
}

module.exports = handleUsers;