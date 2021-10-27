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
      socket.emit('failedToCreateRoom', 'Data was not provided');
      return;
    }
    const { name, id } = data;
    const user = userList.findUser(id);
    if (!user) {
      socket.emit('failedToCreateRoom', 'User was not found');
    }
    const room = roomList.hostRoom(name, user);
    if (!room) {
      socket.emit('failedToCreateRoom', 'Room name was not provided');
      return;
    }
    refreshAllUsers();
    socket.emit('joinedRoom', room.prepareToSend());
  });

  socket.on('joinRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('failedToJoinRoom', 'Data was not provided');
      return;
    }
    const { id, roomId } = data;
    const user = userList.findUser(id);
    const room = roomList.joinRoom(roomId, user);
    if (!room) {
      socket.emit('failedToJoinRoom', 'Either room was not found or was full, or user was not provided');
      return;
    }
    refreshAllUsers();
    socket.emit('joinedRoom', room.prepareToSend());
  });

  socket.on('leaveRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('failedToLeaveRoom', 'Data was not provided');
      return;
    }
    const { id, roomId } = data;
    const user = userList.findUser(id);
    const room = roomList.leaveRoom(roomId, user);
    if (!room) {
      socket.emit('failedToLeaveRoom', 'Either room was not found or user was not provided or user is not in any room');
      return;
    }
    refreshAllUsers();
    socket.emit('leftRoom', room.prepareToSend());
  });

  socket.on('startGame', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('failedToStartGame', 'Data was not provided');
      return;
    }
    const { id } = data;
    const room = roomList.startGameInRoom(id);
    if (!room) {
      socket.emit('failedToStartGame', 'Either room was not found or it\'s full');
      return;
    }
    socket.emit('updateCurrentGame', room.prepareToSend());
  });
}

module.exports = {
  handleRooms,
  roomList,
}