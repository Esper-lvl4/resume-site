function makeHash(length = 15) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
	return result;
}

class UserList {
  list = [];

  constructor(list) {
    if (!Array.isArray(list)) return;
    this.list = list.filter(item => item instanceof User);
  }

  add(user) {
    if (!user || !(user instanceof User)) return;
    if (this.hasUser(user.id)) return;
    this.list.push(user);
  }

  remove(id) {
    if (typeof id !== 'string') return;
    const index = this.list.findIndex(user => user.id === id);
    if (index === -1) return;
    this.list.splice(index, 1);
  }

  hasUser(id) {
    if (typeof id !== 'string') return false;
    return this.list.some(user => user.id === id);
  }

  findUser(id) {
    if (typeof id !== 'string') return;
    return this.list.find(user => user.id === id);
  }

  notifyAllUsers(event, data) {
    this.list.forEach(user => user.notify(event, data));
  }
}

class User {
  id = '';
  name = '';
  color = 'white';
  socket = null;

  constructor(socket, name, id) {
    if (!socket) throw new Error('User needs a socket, to receive messages!');
    if (name) this.name = name;
    this.id = id || makeHash();
    this.socket = socket;
  }

  notify(event, data) {
    this.socket?.emit(event, data);
  }

  prepareToSend() {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
    }
  }
}

module.exports = {
  User,
  UserList,
};