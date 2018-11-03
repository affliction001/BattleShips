class Player {
  constructor(field) {
    this.field = field;
  }

  generateShips() {
    console.log('Player\'s ships is ganerated.');
    return true;
  }

  setShips() {
    this.generateShips();
    console.log('Player\'s ships is set.');
    return true;
  }

  fire(status) {
    console.log('Player was do fire.');
    return status;
  }
}

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
  const player = new Player([]);
  const computer = new Computer([]);
  const message = new Message();

  player.setShips();
  computer.setShips();

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
