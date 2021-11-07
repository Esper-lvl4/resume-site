const { RoomList } = require("./Room");
const { userList } = require("./users");

const roomList = new RoomList();

function refreshAllUsers() {
  userList.notifyAllUsers('refreshRoomList', roomList.prepareToSend());
}

function handleRooms(socket) {
  socket.on('getRoomList', () => {
    socket.emit('refreshRoomList', roomList.prepareToSend());
  });

  socket.on('checkForUserRoom', data => {
    if (!data || typeof data !== 'object' || !data.id) {
      socket.emit('userRoomCheckResult');
      return;
    }

    const room = roomList.getRoomByUserId(data.id);
    socket.emit('userRoomCheckResult', room?.prepareToSend());
  });

  socket.on('getRoom', data => {
    if (!data || typeof data !== 'object' || typeof data.gameId !== 'number') {
      socket.emit('roomSearchResult');
      return;
    }
    const room = roomList.getRoom(data.gameId);
    socket.emit('roomSearchResult', room?.prepareToSend());
  });

  socket.on('createRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to create room: Data was not provided');
      return;
    }
    const { name, id } = data;
    const user = userList.findUser(id);
    if (!user) {
      socket.emit('showError', 'Failed to create room: User was not found');
    }
    const room = roomList.hostRoom(name, user);
    if (!room) {
      socket.emit('showError', 'Failed to create room: Room name was not provided');
      return;
    }
    refreshAllUsers();
    socket.emit('joinedRoom', room.prepareToSend());
  });

  socket.on('joinRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to join room: Data was not provided');
      return;
    }
    const { id, roomId } = data;
    const user = userList.findUser(id);
    const room = roomList.joinRoom(roomId, user);
    if (!room) {
      socket.emit('showError', 'Failed to join room: Either room was not found or was full, or user was not provided');
      return;
    }
    refreshAllUsers();
    socket.emit('joinedRoom', room.prepareToSend());
  });

  socket.on('leaveRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to leave room: Data was not provided');
      return;
    }
    const { id, roomId } = data;
    const user = userList.findUser(id);
    const room = roomList.leaveRoom(roomId, user);
    if (!room) {
      socket.emit('showError', 'Failed to leave room: Either room was not found or user was not provided or user is not in any room');
      return;
    }
    refreshAllUsers();
    socket.emit('leftRoom', room.prepareToSend());
  });

  socket.on('startGame', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to start game: Data was not provided');
      return;
    }
    const { roomId } = data;
    const room = roomList.startGameInRoom(roomId);
    if (!room) {
      socket.emit('showError', 'Failed to start game: Either room was not found or it\'s not full');
      return;
    }
    room.notifyAllPlayers('updateCurrentGame', room.prepareToSend());
  });
}

module.exports = {
  handleRooms,
  roomList,
}