const GameNotation = require("./GameNotation");

class Room {
  id = 0;
  name = '';
  hostId = '';
  players = [];
  gameNotation = new GameNotation();
  timer = 600;
  timerIncrement = 0;
  _started = false;
  _isFinished = false;
  _maxPlayers = 2;
  _whiteTimerStarted = false;
  _blackTimerStarted = false;
  _whiteTimer = 600;
  _blackTimer = 600;

  constructor(id, name) {
    if (typeof id === 'number' && !isNaN(id)) this.id = id;
    if (name && typeof name === 'string') this.name = name;
  }

  get roomIsFull() {
    return this.players.length >= this._maxPlayers;
  }

  get isFinished() {
    return this._isFinished && this._started;
  }

  get gameHasStarted() {
    return this._started;
  }

  join(user) {
    if (!user || this.roomIsFull) return false;
    const userIsAlreadyInThisRoom = this.players.some(player => player.id === user.id);
    if (userIsAlreadyInThisRoom) return false;
    this.players.push(user);
    return true;
  }

  leave(user) {
    if (!user) return false;
    const index = this.players.findIndex(player => player.id === user.id);
    if (index === -1) return false;
    const leavingUser = this.players.splice(index, 1)[0];
    return leavingUser || false;
  }

  startGame() {
    if (!this.roomIsFull || this.gameHasStarted) return false;
    let takenColor = '';
    this.players.forEach(player => {
      if (takenColor) {
        player.color = takenColor === 'white' ? 'black' : 'white';
        return;
      }
      takenColor = !!Math.round(Math.random()) ? 'white' : 'black';
      player.color = takenColor;
    });
    this._started = true;
    return true;
  }
  
  finishGame() {
    this._isFinished = true;
    clearInterval(this._whiteTimerStarted);
    clearInterval(this._blackTimerStarted);
  }

  makeMove(user, move) {
    if (this.timer && !this._whiteTimerStarted) {
      this._whiteTimerStarted = setInterval(() => {
        this._whiteTimer -= 1;
      }, 1000);
    }
    if (this.timer && !this._blackTimerStarted && this.gameNotation.list.length === 1) {
      this._blackTimerStarted = setInterval(() => {
        this._blackTimer -= 1;
      }, 1000);
    }
    this.gameNotation.addMove(user, move);
    user.color === 'white'
      ? this._whiteTimer += this.timerIncrement
      : this._blackTimer += this.timerIncrement;
  }

  notifyAllPlayers(event, data) {
    this.players.forEach(player => {
      player.socket.emit(event, data);
    })
  }

  refresh() {
    this.notifyAllPlayers('synchronizeGame', this.prepareToSend());
  }

  prepareToSend() {
    return {
      id: this.id,
      name: this.name,
      players: this.players.map(player => player.prepareToSend()),
      gameNotation: this.gameNotation.prepareToSend(),
      gameHasStarted: this.gameHasStarted,
      maxPlayers: this._maxPlayers,
      hostId: this.hostId,
    }
  }
}

class RoomList {
  counter = 0;
  list = [];

  getRoomByUserId(id) {
    return this.list.find(room => {
      return room.players.some(player => player.id === id);
    });
  }

  getRoom(id) {
    return this.list.find(room => room.id === id);
  }

  hostRoom(name, user) {
    if (!user) return;
    const id = ++this.counter;
    if (this.counter >= 10000) this.counter = 0;
    const room = new Room(id, name);
    room.join(user);
    room.hostId = user.id;
    this.list.push(room);
    return room;
  }

  joinRoom(id, user) {
    const room = this.list.find(currentRoom => currentRoom.id === id);
    if (!room) return false;
    const successfullyJoined = room.join(user);
    return successfullyJoined ? room : false;
  }

  leaveRoom(id, user) {
    const index = this.list.findIndex(currentRoom => currentRoom.id === id);
    if (index === -1) return false;
    const room = this.list[index];
    const successfullyLeft = room.leave(user);
    if (room.players.length === 0) {
      this.list.splice(index, 1);
    } else if (user.id === room.hostId) {
      room.hostId = room.players[0].id;
    }
    return successfullyLeft ? room : false;
  }

  startGameInRoom(id) {
    const room = this.list.find(currentRoom => currentRoom.id === id);
    if (!room) return false;
    const startResult = room.startGame();
    return startResult ? room : false;
  }

  removeRoom(id) {
    const index = this.list.findIndex(room => room.id === id);
    if (index === -1) return;
    this.list.splice(index, 1);
  }

  prepareToSend() {
    return this.list.map(room => room.prepareToSend());
  }
}

module.exports = {
  Room,
  RoomList,
};
