function makeHash(length = 15) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
	return result;
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

  prepareToSend() {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
    }
  }
}

module.exports = User;