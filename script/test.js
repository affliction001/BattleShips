'use strict';

const SHIPS = [];

class Ship {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.coordinateX = 0;
    this.coordinateY = 0;
  }

  setLocation(X, Y) {
    this.coordinateX = X;
    this.coordinateY = Y;
  }
}

class Display {
  constructor() {
    this.context = document.getElementById('canvas').getContext('2d');
  }

  redrawScreen(ships) {
    this.context.clearRect(0, 0, 500, 500);
    ships.forEach(ship => {
      this.context.fillRect(ship.coordinateX, ship.coordinateY, ship.width, ship.height);
    });
  }
}

class Controller {
  constructor() {}

  createShips() {
    const ship_11 = new Ship(50, 50);
    const ship_12 = new Ship(50, 50);
    const ship_13 = new Ship(50, 50);
    const ship_14 = new Ship(50, 50);
    const ship_21 = new Ship(100, 50);
    const ship_22 = new Ship(100, 50);
    const ship_23 = new Ship(100, 50);
    const ship_31 = new Ship(150, 50);
    const ship_32 = new Ship(150, 50);
    const ship_41 = new Ship(200, 50);
    SHIPS.push(ship_11);
    SHIPS.push(ship_12);
    SHIPS.push(ship_13);
    SHIPS.push(ship_14);
    SHIPS.push(ship_21);
    SHIPS.push(ship_22);
    SHIPS.push(ship_23);
    SHIPS.push(ship_31);
    SHIPS.push(ship_32);
    SHIPS.push(ship_41);
  }
}

function main() {
  const controller = new Controller();
  controller.createShips();

  console.log(SHIPS);

  /*document.querySelector('body').addEventListener('keydown', event => {
    if (event.keyCode === 40) {
      console.log('down');
    }

    if (event.keyCode === 37) {
      console.log('left');
    }

    if (event.keyCode === 38) {
      console.log('up');
    }

    if (event.keyCode === 39) {
      console.log('right');
    }
  });*/
}
main();
