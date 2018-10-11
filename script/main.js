const ENEMY_FIELD = [
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

function generateEnemyShips() {
  function createFourDeckShip() {
    const ship = [];
    const direction = Math.floor(Math.random() * 2) === 0 ? 'horizont' : 'vertical';
    const x_coordinate = Math.floor(Math.random() * 10);
    const y_coordinate = Math.floor(Math.random() * 10);

    if (direction === 'horizont') {
      if (x_coordinate <= 4) {
        ship.push({x: x_coordinate, y: y_coordinate});
        ship.push({x: x_coordinate + 1, y: y_coordinate});
        ship.push({x: x_coordinate + 2, y: y_coordinate});
        ship.push({x: x_coordinate + 3, y: y_coordinate});
      }
      if (x_coordinate >= 5) {
        ship.push({x: x_coordinate, y: y_coordinate});
        ship.push({x: x_coordinate - 1, y: y_coordinate});
        ship.push({x: x_coordinate - 2, y: y_coordinate});
        ship.push({x: x_coordinate - 3, y: y_coordinate});
      }
    }

    if (direction === 'vertical') {
      if (y_coordinate <= 4) {
        ship.push({x: x_coordinate, y: y_coordinate});
        ship.push({x: x_coordinate, y: y_coordinate + 1});
        ship.push({x: x_coordinate, y: y_coordinate + 2});
        ship.push({x: x_coordinate, y: y_coordinate + 3});
      }
      if (y_coordinate >= 5) {
        ship.push({x: x_coordinate, y: y_coordinate});
        ship.push({x: x_coordinate, y: y_coordinate - 1});
        ship.push({x: x_coordinate, y: y_coordinate - 2});
        ship.push({x: x_coordinate, y: y_coordinate - 3});
      }
    }

    ship.forEach(coordinate => {
      ENEMY_FIELD[coordinate.y][coordinate.x] = 4;
    });
  }

  function createThreeDeckShip() {

  }

  function createTwoDeckShip() {

  }

  function createOneDeckShip() {

  }

  createFourDeckShip();
}

generateEnemyShips();
