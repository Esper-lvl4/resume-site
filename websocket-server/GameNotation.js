class ChessMove {
  move = '';
  color = 'white';

  constructor(move, color) {
    this.move = move;
    this.color = color;
  }
}

class GameNotation {
  list = [];

  get lastMove() {
    return this.list.length === 0
      ? ''
      : this.list[this.list.length - 1]; 
  }

  addMove(user, move) {
    if (typeof move !== 'string' || !user) return false;
    if (!this.lastMove || this.lastMove.color !== user.color) {
      this.list.push(new ChessMove(move, user.color));
      return true;
    }
    return false;
  }

  removeLastMove() {
    if (!this.lastMove) return;
    this.list.pop();
  }

  clear() {
    this.list = [];
  }

  prepareToSend() {
    return this.list.map(item => item.move);
  }
}

module.exports = GameNotation;