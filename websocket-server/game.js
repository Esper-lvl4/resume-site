const { roomList } = require("./rooms");
const { userList } = require("./users");

function handleGame(socket) {
  let savedGame = null;
  const getGame = (userId) => {
    if (savedGame && !savedGame.isFinished) return savedGame;
    const currentGame = roomList.getRoomByUserId(userId);
    if (!currentGame || !currentGame.gameHasStarted || currentGame.isFinished) {
      return null;
    }
    savedGame = currentGame;
    return currentGame;
  }

  socket.on('makeMove', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('failedToMakeMove', 'Data was not provided');
      return;
    }
    const { id, move } = data;
    const user = userList.findUser(id);
    if (!user) return;
    const game = getGame(user.id);
    if (!game) return;

    game.makeMove(user, move);
    game.refresh();
  });
}

module.exports = handleGame;