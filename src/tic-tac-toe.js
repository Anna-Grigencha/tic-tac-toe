class TicTacToe {
  constructor() {
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayerSymbol = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    // if field cell is not empty
    if (this.getFieldValue(rowIndex, columnIndex) !== null) {
      return;
    }
    // set field cell value to current playr
    this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
    // set next player
    if (this.currentPlayerSymbol === "x") {
      this.currentPlayerSymbol = "o";
    } else {
      this.currentPlayerSymbol = "x";
    }
  }

  isFinished() {
    return this.getWinner() !== null || this.noMoreTurns() === true;
  }

  getWinner() {
    let winner = null;

    // some row is a winner
    for (let row = 0; row <= 2; row++) {
      let sameAndNotNull = true;
      let firstValue = null;

      for (let col = 0; col <= 2; col++) {
        if (sameAndNotNull === false) {
          break;
        }

        if (this.getFieldValue(row, col) === null) {
          sameAndNotNull = false;
          break;
        }

        if (firstValue === null) {
          firstValue = this.getFieldValue(row, col);
        }

        if (this.getFieldValue(row, col) !== firstValue) {
          sameAndNotNull = false;
          break;
        }
      }

      if (sameAndNotNull === true) {
        winner = firstValue;
        break;
      }
    }
    // some collumn is a winner
    if (winner === null) {
      for (let col = 0; col <= 2; col++) {
        let sameAndNotNull = true;
        let firstValue = null;

        for (let row = 0; row <= 2; row++) {
          if (sameAndNotNull === false) {
            break;
          }

          if (this.getFieldValue(row, col) === null) {
            sameAndNotNull = false;
            break;
          }

          if (firstValue === null) {
            firstValue = this.getFieldValue(row, col);
          }

          if (this.getFieldValue(row, col) !== firstValue) {
            sameAndNotNull = false;
            break;
          }
        }

        if (sameAndNotNull === true) {
          winner = firstValue;
          break;
        }
      }
    }
    // some diagonal is a winner
    if (winner === null) {
      let sameAndNotNull = true;
      let firstValue = null;
      //     \
      for (let i = 0; i <= 2; i++) {
        if (sameAndNotNull === false) {
          break;
        }

        if (this.getFieldValue(i, i) === null) {
          sameAndNotNull = false;
          break;
        }

        if (firstValue === null) {
          firstValue = this.getFieldValue(i, i);
        }

        if (this.getFieldValue(i, i) !== firstValue) {
          sameAndNotNull = false;
          break;
        }
      }

      if (sameAndNotNull) {
        winner = firstValue;
      }

      //     /
      if (winner === null) {
        firstValue = null;
        sameAndNotNull = true;
        for (let i = 0; i <= 2; i++) {
          if (sameAndNotNull === false) {
            break;
          }

          if (this.getFieldValue(i, 2 - i) === null) {
            sameAndNotNull = false;
            break;
          }

          if (firstValue === null) {
            firstValue = this.getFieldValue(i, 2 - i);
          }

          if (this.getFieldValue(i, 2 - i) !== firstValue) {
            sameAndNotNull = false;
            break;
          }
        }

        if (sameAndNotNull) {
          winner = firstValue;
        }
      }
    }

    return winner;
  }

  noMoreTurns() {
    let result = true;

    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        if (this.field[j][i] === null) {
          result = false;
        }
      }
    }

    return result;
  }

  isDraw() {
    return this.noMoreTurns() === true && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
