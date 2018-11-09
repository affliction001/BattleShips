'use strict';

const COMPUTER_FIELD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const PLAYER_FIELD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const PLAYER_FIELD_MIRROR = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

/*
  Player interface.
*/

class Player {
  constructor(field) {
    this.field = field;
  }

  generateShips(shipsSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]) {
    const readyShips = [];

    function buildShip(size) {
      const ship = [];
      for (let i = 0; i < size; i++) {
         ship.push({x: i, y: 0});
      }
      return ship;
    }

    shipsSizes.forEach(size => {
      readyShips.push(buildShip(size));
    });

    return readyShips;
  }

  setShips() {
    const ships = this.generateShips();

    return true;
  }

  fire(status) {
    console.log('Player was do fire.');
    return status;
  }
}

/*
  Computer interface.
*/

class Computer {
  constructor(field) {
    this.field = field;
  }

  generateShips() {
    console.log('Computer\'s ships is ganerated.');
    return true;
  }

  setShips() {
    this.generateShips();
    console.log('Computer\'s ships is set.');
    return true;
  }

  fire(status) {
    console.log('Computer was do fire.');
    return status;
  }
}

/*
  Screen messages.
*/

class Message {
  constructor(stringsData) {
    this.stringsData = stringsData;
  }

  showMiss(who) {
    console.log(who, ':', 'Miss.');
  }

  showInjure(who) {
    console.log(who, ':', 'Injure.')
  }

  showKill(who) {
    console.log(who, ':', 'Kill.');
  }

  showWhosStepIsNow(who) {
    if (who === 'player') {
      console.log('PLayer\'s step is now.');
    } else if (who === 'computer') {
      console.log('Computer\'s step is now.');
    }
  }
}

/*
  Main function
*/

function main() {
  const player = new Player(PLAYER_FIELD);
  const computer = new Computer(COMPUTER_FIELD);
  const message = new Message();

  player.setShips();
  computer.setShips();

  // Здесь шаг игрока
  while (true) {
    while (true) {
      console.log('');
      message.showWhosStepIsNow('player');

      let enter = prompt('Player shooting');
      let isStat = player.fire(enter);

      if (isStat === 'miss') {
        message.showMiss('player');
        break;
      }

      if (isStat === 'injure') {
        message.showInjure('player');
        continue;
      }

      if (isStat === 'kill') {
        message.showKill('player');
        return 'Player win!!!';
      }
    }

    // Здесь шаг компьютера
    while (true) {
      console.log('');
      message.showWhosStepIsNow('computer');

      let enter = prompt('Computer shooting');
      let isStat = computer.fire(enter);

      if (isStat === 'miss') {
        message.showMiss('computer');
        break;
      }

      if (isStat === 'injure') {
        message.showInjure('computer');
        continue;
      }

      if (isStat === 'kill') {
        message.showKill('computer');
        return 'Player loose!!!';
      }
    }
  }
}

console.log(main());
