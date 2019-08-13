// console.log("Hello!");
var board = [];

// function play(clickedId) {
//     const playerSpan = document.getElementById('player');
//     const clickedElement = document.getElementById(clickedId);

//     if (playerSpan.innerText === 'X') {
//         playerSpan.innerText = 'O';
//         clickedElement.innerText = 'X';
//         board[clickedElement] = 'X';
//     } else {
//         playerSpan.innerText = 'X';
//         clickedElement.innerText = 'O';
//         board[clickedElement] = 'O';
//     }
//     console.log(board);

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);
  
    if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      clickedElement.innerText = 'X';
      board[clickedId] = 'X';
    } else {
      playerSpan.innerText = 'X';
      clickedElement.innerText = 'O';
      board[clickedId] = 'O';
    }
    
    console.log(board);

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    // winning solutions ~ if/if else
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} wins!`);
        return;
    } else if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} wins!`);
        return;
    } else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} wins!`);
        return;
    } else if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} wins!`);
        return;
    } else if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} wins!`);
        return;
    } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} wins!`);
        return;
    } else if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} wins!`)
        return;
    } else if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(`${topRight} wins!`);
        return;
    }


    // board is full ~ loop
    let fullBoard = true;
    for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
          fullBoard = false;
        }
    }  
    
    if (fullBoard === true) {
        alert("CAT's game!");
    } 

}