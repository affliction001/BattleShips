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
  function isIntersectAnotherShip(ship) {
    /*
        Метод проверяет поле вокруг корабля и на месте самого корабля на наличие другого корабля.
        Возвращает true если пересечения нет, в противном случае false.
        Принимает в качестве агрумента массив с обьектами, которые содержат координаты корабля и идентификационный маркер.
        Устанавливается флаг на случай пересечения с другим кораблем, значение по умолчанию false.
        Массив перебирается с помощью цикла, каждая координата корабля и пространство вокруг нее
        в радиусе одной клетки проверяется на поле.
        Отфильтровываются все случаи выхода за пределы поля.
        Если проверяемая клетка поля содержит в себе другой корабль (число отличное от нуля) или
        там не заданный корабль (не идентификационный маркер), то устанавливаем флаг в false.
    */

    let isIntersect = true;

    ship.forEach(block => {
      if (block.y - 1 === -1) {
        if (block.x - 1 === -1) {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x+1] !== 0 && ENEMY_FIELD[block.y][block.x+1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x]   !== 0 && ENEMY_FIELD[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x+1] !== 0 && ENEMY_FIELD[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        } else if (block.x + 1 === 10) {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x-1] !== 0 && ENEMY_FIELD[block.y][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x-1] !== 0 && ENEMY_FIELD[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x]   !== 0 && ENEMY_FIELD[block.y+1][block.x]   !== block.m) { isIntersect = false; }
        } else {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x-1] !== 0 && ENEMY_FIELD[block.y][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x+1] !== 0 && ENEMY_FIELD[block.y][block.x+1] !== block.m) { isIntersect = false; }

          if (ENEMY_FIELD[block.y+1][block.x-1] !== 0 && ENEMY_FIELD[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x]   !== 0 && ENEMY_FIELD[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x+1] !== 0 && ENEMY_FIELD[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        }
      } else if (block.y + 1 === 10) {
        if (block.x - 1 === -1) {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x]   !== 0 && ENEMY_FIELD[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x+1] !== 0 && ENEMY_FIELD[block.y-1][block.x+1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x+1] !== 0 && ENEMY_FIELD[block.y][block.x+1] !== block.m) { isIntersect = false; }
        } else if (block.x + 1 === 10) {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x-1] !== 0 && ENEMY_FIELD[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x]   !== 0 && ENEMY_FIELD[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x-1] !== 0 && ENEMY_FIELD[block.y][block.x-1] !== block.m) { isIntersect = false; }
        } else {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x-1] !== 0 && ENEMY_FIELD[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x]   !== 0 && ENEMY_FIELD[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x+1] !== 0 && ENEMY_FIELD[block.y-1][block.x+1] !== block.m) { isIntersect = false; }

          if (ENEMY_FIELD[block.y][block.x-1] !== 0 && ENEMY_FIELD[block.y][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x+1] !== 0 && ENEMY_FIELD[block.y][block.x+1] !== block.m) { isIntersect = false; }
        }
      } else {
        if (block.x - 1 === -1) {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x]   !== 0 && ENEMY_FIELD[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x+1] !== 0 && ENEMY_FIELD[block.y-1][block.x+1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x+1] !== 0 && ENEMY_FIELD[block.y][block.x+1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x]   !== 0 && ENEMY_FIELD[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x+1] !== 0 && ENEMY_FIELD[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        } else if (block.x + 1 === 10) {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x-1] !== 0 && ENEMY_FIELD[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x]   !== 0 && ENEMY_FIELD[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x-1] !== 0 && ENEMY_FIELD[block.y][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x-1] !== 0 && ENEMY_FIELD[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x]   !== 0 && ENEMY_FIELD[block.y+1][block.x]   !== block.m) { isIntersect = false; }
        } else {
          if (ENEMY_FIELD[block.y][block.x] !== 0 && ENEMY_FIELD[block.y][block.x] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x-1] !== 0 && ENEMY_FIELD[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x]   !== 0 && ENEMY_FIELD[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y-1][block.x+1] !== 0 && ENEMY_FIELD[block.y-1][block.x+1] !== block.m) { isIntersect = false; }

          if (ENEMY_FIELD[block.y][block.x-1] !== 0 && ENEMY_FIELD[block.y][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y][block.x+1] !== 0 && ENEMY_FIELD[block.y][block.x+1] !== block.m) { isIntersect = false; }

          if (ENEMY_FIELD[block.y+1][block.x-1] !== 0 && ENEMY_FIELD[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x]   !== 0 && ENEMY_FIELD[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (ENEMY_FIELD[block.y+1][block.x+1] !== 0 && ENEMY_FIELD[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        }
      }
    });

    return isIntersect;
  }

  function createFourDeckShip(marker) {
    const ship = [];

    const direction = Math.floor(Math.random() * 2) === 0 ? 'horizont' : 'vertical';

    const x_coordinate = Math.floor(Math.random() * 10);
    const y_coordinate = Math.floor(Math.random() * 10);

    const rowMiddle = ENEMY_FIELD[0].length / 2;
    const columnMiddle = ENEMY_FIELD.length / 2;

    if (direction === 'horizont') {
      if (x_coordinate < rowMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate + 1, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate + 2, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate + 3, y: y_coordinate, m: marker});
      }
      if (x_coordinate >= rowMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate - 1, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate - 2, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate - 3, y: y_coordinate, m: marker});
      }
    }

    if (direction === 'vertical') {
      if (y_coordinate < columnMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate + 1, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate + 2, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate + 3, m: marker});
      }
      if (y_coordinate >= columnMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate - 1, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate - 2, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate - 3, m: marker});
      }
    }

    ship.forEach(coordinate => {
      ENEMY_FIELD[coordinate.y][coordinate.x] = marker;
    });
  }

  function createThreeDeckShip(marker) {
    const ship = [];

    const direction = Math.floor(Math.random() * 2) === 0 ? 'horizont' : 'vertical';

    const x_coordinate = Math.floor(Math.random() * 10);
    const y_coordinate = Math.floor(Math.random() * 10);

    const rowMiddle = ENEMY_FIELD[0].length / 2;
    const columnMiddle = ENEMY_FIELD.length / 2;

    if (direction === 'horizont') {
      if (x_coordinate < rowMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate + 1, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate + 2, y: y_coordinate, m: marker});
      }
      if (x_coordinate >= rowMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate - 1, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate - 2, y: y_coordinate, m: marker});
      }
    }

    if (direction === 'vertical') {
      if (y_coordinate < columnMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate + 1, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate + 2, m: marker});
      }
      if (y_coordinate >= columnMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate - 1, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate - 2, m: marker});
      }
    }

    if (isIntersectAnotherShip(ship)) {
      ship.forEach(coordinate => {
        ENEMY_FIELD[coordinate.y][coordinate.x] = marker;
      });
    } else {
      createThreeDeckShip(marker);
    }
  }

  function createTwoDeckShip(marker) {
    const ship = [];

    const direction = Math.floor(Math.random() * 2) === 0 ? 'horizont' : 'vertical';

    const x_coordinate = Math.floor(Math.random() * 10);
    const y_coordinate = Math.floor(Math.random() * 10);

    const rowMiddle = ENEMY_FIELD[0].length / 2;
    const columnMiddle = ENEMY_FIELD.length / 2;

    if (direction === 'horizont') {
      if (x_coordinate < rowMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate + 1, y: y_coordinate, m: marker});
      }
      if (x_coordinate >= rowMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate - 1, y: y_coordinate, m: marker});
      }
    }

    if (direction === 'vertical') {
      if (y_coordinate < columnMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate + 1, m: marker});
      }
      if (y_coordinate >= columnMiddle) {
        ship.push({x: x_coordinate, y: y_coordinate, m: marker});
        ship.push({x: x_coordinate, y: y_coordinate - 1, m: marker});
      }
    }

    if (isIntersectAnotherShip(ship)) {
      ship.forEach(coordinate => {
        ENEMY_FIELD[coordinate.y][coordinate.x] = marker;
      });
    } else {
      createTwoDeckShip(marker);
    }
  }

  function createOneDeckShip(marker) {
    const ship = [];

    const x_coordinate = Math.floor(Math.random() * 10);
    const y_coordinate = Math.floor(Math.random() * 10);

    ship.push({x: x_coordinate, y: y_coordinate, m: marker});

    if (isIntersectAnotherShip(ship)) {
      ship.forEach(coordinate => {
        ENEMY_FIELD[coordinate.y][coordinate.x] = marker;
      });
    } else {
      createOneDeckShip(marker);
    }
  }

  createFourDeckShip('40');
  createThreeDeckShip('30');
  createThreeDeckShip('31');
  createTwoDeckShip('20');
  createTwoDeckShip('21');
  createTwoDeckShip('22');
  createOneDeckShip('10');
  createOneDeckShip('11');
  createOneDeckShip('12');
  createOneDeckShip('13');
}

generateEnemyShips();

let fieldStr = '';
ENEMY_FIELD.forEach(row => {
  let rowStr = '\t';
  row.forEach(cell => {
    rowStr += cell + '\t';
  });
  fieldStr += rowStr + '\n\n';
});
console.log(fieldStr);
