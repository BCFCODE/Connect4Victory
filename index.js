//Training on Connect Four | Codewars

//https://www.codewars.com/kata/56882731514ec3ec3d000009/train/javascript
//Video link: https://www.bing.com/videos/riverview/relatedvideo?&q=connect+four+rules+&&mid=A4E0C4A8044145677E23A4E0C4A8044145677E23&&FORM=VRDGAR

class FindWinner {
  constructor() {
    this.board = ["", "", "", "", "", "", ""];
    this.colorCodes = { Yellow: 1, Red: 0 };
  }

  checkDiagonalLeftToRight() {
    let leftToRightDiagonal = "";
    let [X_leftToRight, leftTraverseUp] = this._startSpots;
    const [, col, color] = this._colData;
    while (X_leftToRight < 7 && leftTraverseUp < 5) {
      leftToRightDiagonal += this.board[X_leftToRight][leftTraverseUp]
      X_leftToRight++;
      leftTraverseUp++;
    }
    if (/0{4}|1{4}/.test(leftToRightDiagonal)) return color;
  }

  checkDiagonalRightToLeft() {
    let rightToLeftDiagonal = "";
    const [, , color] = this._colData;
    let [, , X_rightToLeft, rightTraverseUp] = this._startSpots;
    while (X_rightToLeft >= 0 && rightTraverseUp <= 5) {
      console.log(X_rightToLeft, rightTraverseUp) 
      rightToLeftDiagonal += this.board[X_rightToLeft][rightTraverseUp]
      X_rightToLeft--
      rightTraverseUp++
    }
    console.log(rightToLeftDiagonal)
    if (/0{4}|1{4}/.test(rightToLeftDiagonal)) return color;
  }

  debugging() {
    const [leftXstartSpot, leftYstartSpot, rightXstartSpot, rightYstartSpot] =
      this._startSpots;
      const [X_index, Y_index] = this._spotFinderData;
      const [_, col, color] = this._colData;
      this.checkDiagonalLeftToRight();
      this.checkDiagonalRightToLeft();
    console.log(
      col,
      "<col",
      // "currentCol>",
      // currentCol,
      "X_index>",
      X_index,
      "Y_index>",
      Y_index
    );
    console.log(
      ".".repeat(3),
      "leftXstartSpot>",
      leftXstartSpot,
      "leftYstartSpot>",
      leftYstartSpot,
      "rightXstartSpot>",
      rightXstartSpot,
      "rightYstartSpot>",
      rightYstartSpot
    );

    this.board.forEach((col, i) =>
      console.log(
        ["A", "B", "C", "D", "E", "F", "G"][i],
        col === "" ? "*" : col
      )
    );
    console.log("_".repeat(28));
  }

  spotFinder() {
    const [X_index, Y_index] = this._spotFinderData;
    const leftXstartSpot = X_index - Y_index < 0 ? 0 : X_index - Y_index,
      leftYstartSpot = Y_index - X_index < 0 ? 0 : Y_index - X_index,
      rightXstartSpot = X_index + Y_index > 6 ? 6 : X_index + Y_index,
      rightYstartSpot =
        Y_index - (6 - X_index) < 0 ? 0 : Y_index - (6 - X_index);
    this._startSpots = [
      leftXstartSpot,
      leftYstartSpot,
      rightXstartSpot,
      rightYstartSpot,
    ];
  }

  diagonalCheck() {
    let [X_index, col, color] = this._colData;
    const currentCol = this.board[X_index];
    const Y_index = currentCol.length - 1;
    this._spotFinderData = [X_index, Y_index];
    this.spotFinder();
    this.debugging();
  }

  crossCheck() {
    let [X_index, col, color] = this._colData;
    const currentCol = this.board[X_index];
    const Y_index = currentCol.length - 1;
    let [x, y] = ["", currentCol];
    for (let i = 0; i < this.board.length; i++) {
      x += this.board[i][Y_index] ?? "*";
    }
    if (/0{4}|1{4}/.test(x) || /0{4}|1{4}/.test(y)) return color;
  }

  get inCrossLines() {
    return this._result;
  }

  set moves(piecesPositionList) {
    const keyCol = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
    for (let i = 0; i < piecesPositionList.length; i++) {
      const [col, color] = piecesPositionList[i].split`_`;
      const X_index = keyCol[col];
      this.board[X_index] += this.colorCodes[color];
      this._colData = [X_index, col, color];
      this._traverseLeftToRightData = [];
      this._result = this.crossCheck() || this.diagonalCheck() || this.checkDiagonalLeftToRight() || this.checkDiagonalRightToLeft() ;
      if(this._result === undefined) this._result === 'Draw'
      if (this._result) break;
    }
    console.log(this.board, piecesPositionList);
  }
}

const whoIsWinner = (piecesPositionList) => {
  const winner = new FindWinner();
  winner.moves = piecesPositionList;
  return winner.inCrossLines ?? 'Draw';
};

export { whoIsWinner };
