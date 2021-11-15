const { roomList } = require("./rooms");
const { userList } = require("./users");

function handleGame(socket) {
  let savedGame = null;
  const getGame = (userId) => {
    if (savedGame) return savedGame;
    const currentGame = roomList.getRoomByUserId(userId);
    if (!currentGame || !currentGame.gameHasStarted) {
      return null;
    }
    savedGame = currentGame;
    return currentGame;
  }

  socket.on('makeMove', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to make move: Data was not provided');
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

  socket.on('checkmateReached', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to surrender: Data was not provided');
      return;
    }
    const { id, winningPlayer } = data;
    if (!winningPlayer) return;
    const user = userList.findUser(id);
    if (!user) return;
    const game = getGame(user.id);
    if (!game) return;

    const player = game.players.find(player => player.color === winningPlayer);
    if (!player) return;
    game.finishGame();
    game.notifyAllPlayers('playerWon', {
      room: game.prepareToSend(),
      player: player.prepareToSend(),
    });
  });

  socket.on('surrenderGame', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to surrender: Data was not provided');
      return;
    }
    const { id } = data;
    const user = userList.findUser(id);
    if (!user) return;
    const game = getGame(user.id);
    if (!game) return;
    game.finishGame();
    const winningPlayer = game.players.find(player => player.id !== user.id);
    game.notifyAllPlayers('playerWon', {
      room: game.prepareToSend(),
      player: winningPlayer.prepareToSend(),
    });
  });

  socket.on('restartGame', data => {
    if (!data || typeof data !== 'object') {
      socket.emit('showError', 'Failed to restart the game: Data was not provided');
      return;
    }
    const { id } = data;
    const user = userList.findUser(id);
    if (!user) return;
    const game = getGame(user.id);
    if (!game) return;
    game.restartGame(user.id);
  });
}

module.exports = handleGame;