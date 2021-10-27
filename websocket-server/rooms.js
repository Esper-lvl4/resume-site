const { RoomList } = require("./Room");

const roomList = new RoomList();

function handleRooms(socket) {
  socket.on('checkForUserRoom', data => {
    if (!data || typeof data !== 'object' || !data.id) {
      socket.emit('userRoomCheckResult');
      return;
    }

    const room = roomList.getRoomByUserId(data.id);
    socket.emit('userRoomCheckResult', room);
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
    const { name, user } = data;
    const room = roomList.hostRoom(name, user);
    if (!room) {
      socket.emit('failedToCreateRoom', 'User or name was not provided');
      return;
    }
    socket.emit('joinedRoom', room);
  });

  socket.on('joinRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('failedToJoinRoom', 'Data was not provided');
      return;
    }
    const { id, user } = data;
    const room = roomList.joinRoom(id, user);
    if (!room) {
      socket.emit('failedToJoinRoom', 'Either room was not found or was full, or user was not provided');
      return;
    }
    socket.emit('joinedRoom', room);
  });

  socket.on('leaveRoom', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('failedToLeaveRoom', 'Data was not provided');
      return;
    }
    const { id, user } = data;
    const room = roomList.leaveRoom(id, user);
    if (!room) {
      socket.emit('failedToLeaveRoom', 'Either room was not found or user was not provided or user is not in any room');
      return;
    }
    socket.emit('leftRoom', room);
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
    socket.emit('updateCurrentGame', room);
  });
}

module.exports = {
  handleRooms,
  roomList,
}