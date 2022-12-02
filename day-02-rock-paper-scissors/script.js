// From https://adventofcode.com/2022/day/2
const fs = require('fs');
const setup = (inputPath = 'input.txt') => {
  return fs.readFileSync(inputPath, { encoding: 'utf-8' }).split('\n');
};
const partOne = () => {
  const input = setup();
  let gameScore = 0;
  for (let [opponentMove, playerMove] of input.map((inpot) =>
    inpot.split(' ')
  )) {
    let roundScore = 0;
    const oppMove = decryptMove(opponentMove);
    const playMove = decryptMove(playerMove);
    if (playMove === 'rock') {
      roundScore += 1;
    } else if (playMove === 'paper') {
      roundScore += 2;
    } else if (playMove === 'scissors') {
      roundScore += 3;
    }
    const result = roundResult(playMove, oppMove);
    if (result === 'win') {
      roundScore += 6;
    } else if (result === 'draw') {
      roundScore += 3;
    }
    gameScore += roundScore;
  }
  console.log(`Score after the game: ${gameScore}`);
};
const partTwo = () => {
  const input = setup();
  let gameScore = 0;
  for (let [opponentMove, playerResult] of input.map((inpot) =>
    inpot.split(' ')
  )) {
    let roundScore = 0;
    const oppMove = decryptMove(opponentMove);
    const playResult = decryptResult(playerResult);
    if (playResult === 'win') {
      roundScore += 6;
    } else if (playResult === 'draw') {
      roundScore += 3;
    }
    const move = roundMove(playResult, oppMove);
    if (move === 'rock') {
      roundScore += 1;
    } else if (move === 'paper') {
      roundScore += 2;
    } else if (move === 'scissors') {
      roundScore += 3;
    }
    gameScore += roundScore;
  }
  console.log(`Score after the game: ${gameScore}`);
};
partOne();
partTwo();

function decryptMove(move) {
  if (['A', 'X'].includes(move)) {
    return 'rock';
  }
  if (['B', 'Y'].includes(move)) {
    return 'paper';
  }
  if (['C', 'Z'].includes(move)) {
    return 'scissors';
  }
}

function decryptResult(result) {
  if (result === 'X') {
    return 'lose';
  } else if (result === 'Y') {
    return 'draw';
  } else if (result === 'Z') {
    return 'win';
  }
}

function roundResult(aMove, bMove) {
  if (aMove === 'rock') {
    if (bMove === 'paper') {
      return 'lose';
    } else if (bMove === 'scissors') {
      return 'win';
    } else {
      return 'draw';
    }
  }
  if (aMove === 'paper') {
    if (bMove === 'scissors') {
      return 'lose';
    } else if (bMove === 'rock') {
      return 'win';
    } else {
      return 'draw';
    }
  }
  if (aMove === 'scissors') {
    if (bMove === 'rock') {
      return 'lose';
    } else if (bMove === 'paper') {
      return 'win';
    } else {
      return 'draw';
    }
  }
}

function roundMove(result, move) {
  if (result === 'win') {
    if (move === 'rock') {
      return 'paper';
    } else if (move === 'paper') {
      return 'scissors';
    } else if (move === 'scissors') {
      return 'rock';
    }
  }
  if (result === 'lose') {
    if (move === 'rock') {
      return 'scissors';
    } else if (move === 'paper') {
      return 'rock';
    } else if (move === 'scissors') {
      return 'paper';
    }
  }
  if (result === 'draw') {
    return move;
  }
}
