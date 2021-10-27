const { User, UserList } = require("./User");

const userList = new UserList();

function handleUsers(socket) {
  socket.on('checkUser', data => {
		if (!data || typeof data !== 'object' || !data.id) {
			const newUser = new User(socket);
			userList.add(newUser);
			socket.emit('saveUser', newUser.prepareToSend());
			return;
		}
		
		const { id, name } = data;
		if (typeof id !== 'string') return;

		const user = userList.findUser(id);
		if (!user) {
			userList.add(new User(socket, name, id));
		} else {
			user.socket = socket;
		}
		socket.emit('userIsConnected', data);
	});

	socket.on('setNewUserName', data => {
		if (!data || typeof data !== 'object') return;
		const { id, name } = data;
		const user = userList.findUser(id);
		if (!user) return;
		user.name = name;
	});
}

module.exports = {
	handleUsers,
	userList,
};