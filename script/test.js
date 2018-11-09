'use strict';

const STEP = 100;

class Box {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setBoxCoordinate(x, y) {
    this.x = x;
    this.y = y;
  }

  moveRight() {
    this.x += STEP;
  }
}

class View {
  constructor() {
    this.context = document.getElementById('canvas').getContext('2d');
  }

  drawShip(ship) {
    this.context.fillRect(ship.x, ship.y, ship.width, ship.height);
  }
}

const box_1 = new Box(100, 100);
box_1.setBoxCoordinate(100, 0);

const box_2 = new Box(100, 100);
box_2.setBoxCoordinate(400, 0);

const view = new View();
view.drawShip(box_1);
view.drawShip(box_2);
