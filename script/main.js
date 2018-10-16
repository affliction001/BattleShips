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

const PLAYER_FIELD_MIRROR = [];

// Проверяется пересечение корабля с другими кораблями на поле
function isIntersectAnotherShip(ship, field) {
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

  try {
    ship.forEach(block => {
      if (block.y - 1 === -1) {
        if (block.x - 1 === -1) {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y][block.x+1]   !== 0 && field[block.y][block.x+1]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x]   !== 0 && field[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x+1] !== 0 && field[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        } else if (block.x + 1 === 10) {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y][block.x-1]   !== 0 && field[block.y][block.x-1]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x-1] !== 0 && field[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x]   !== 0 && field[block.y+1][block.x]   !== block.m) { isIntersect = false; }
        } else {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y][block.x-1]   !== 0 && field[block.y][block.x-1]   !== block.m) { isIntersect = false; }
          if (field[block.y][block.x+1]   !== 0 && field[block.y][block.x+1]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x-1] !== 0 && field[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x]   !== 0 && field[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x+1] !== 0 && field[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        }
      } else if (block.y + 1 === 10) {
        if (block.x - 1 === -1) {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x]   !== 0 && field[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x+1] !== 0 && field[block.y-1][block.x+1] !== block.m) { isIntersect = false; }
          if (field[block.y][block.x+1]   !== 0 && field[block.y][block.x+1]   !== block.m) { isIntersect = false; }
        } else if (block.x + 1 === 10) {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x-1] !== 0 && field[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x]   !== 0 && field[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y][block.x-1]   !== 0 && field[block.y][block.x-1]   !== block.m) { isIntersect = false; }
        } else {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x-1] !== 0 && field[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x]   !== 0 && field[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x+1] !== 0 && field[block.y-1][block.x+1] !== block.m) { isIntersect = false; }
          if (field[block.y][block.x-1]   !== 0 && field[block.y][block.x-1]   !== block.m) { isIntersect = false; }
          if (field[block.y][block.x+1]   !== 0 && field[block.y][block.x+1]   !== block.m) { isIntersect = false; }
        }
      } else {
        if (block.x - 1 === -1) {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x]   !== 0 && field[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x+1] !== 0 && field[block.y-1][block.x+1] !== block.m) { isIntersect = false; }
          if (field[block.y][block.x+1]   !== 0 && field[block.y][block.x+1]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x]   !== 0 && field[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x+1] !== 0 && field[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        } else if (block.x + 1 === 10) {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x-1] !== 0 && field[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x]   !== 0 && field[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y][block.x-1]   !== 0 && field[block.y][block.x-1]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x-1] !== 0 && field[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x]   !== 0 && field[block.y+1][block.x]   !== block.m) { isIntersect = false; }
        } else {
          if (field[block.y][block.x]     !== 0 && field[block.y][block.x]     !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x-1] !== 0 && field[block.y-1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x]   !== 0 && field[block.y-1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y-1][block.x+1] !== 0 && field[block.y-1][block.x+1] !== block.m) { isIntersect = false; }
          if (field[block.y][block.x-1]   !== 0 && field[block.y][block.x-1]   !== block.m) { isIntersect = false; }
          if (field[block.y][block.x+1]   !== 0 && field[block.y][block.x+1]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x-1] !== 0 && field[block.y+1][block.x-1] !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x]   !== 0 && field[block.y+1][block.x]   !== block.m) { isIntersect = false; }
          if (field[block.y+1][block.x+1] !== 0 && field[block.y+1][block.x+1] !== block.m) { isIntersect = false; }
        }
      }
    });
  } catch(exepcion) {
    isIntersect = false;
  }

  return isIntersect;
}

// Генерируются вражеские корабли
function generateEnemyShips() {
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

    if (isIntersectAnotherShip(ship, ENEMY_FIELD)) {
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

    if (isIntersectAnotherShip(ship, ENEMY_FIELD)) {
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

    if (isIntersectAnotherShip(ship, ENEMY_FIELD)) {
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

// Генерируются корабли игрока
function generatePlayerShips() {
  PLAYER_FIELD.forEach(row => {
    let newRow = [];
    row.forEach(cell => {
      newRow.push(cell);
    });
    PLAYER_FIELD_MIRROR.push(newRow);
  }); // копируется поле игрока в поле-зеркало

  function placeOnPlayerField(ship) {
    ship.forEach(block => {
      PLAYER_FIELD[block.y][block.x] = block.m;
    });
  }

  function placeOnPlayerFieldMirror(ship) {
    ship.forEach(block => {
      PLAYER_FIELD_MIRROR[block.y][block.x] = block.m;
    });
  }

  function stepRight(oldShip) {
    let newShip = [];
    oldShip.forEach(block => { newShip.push({x: block.x + 1, y: block.y, m: block.m}); });
    return newShip;
  }

  function stepLeft(oldShip) {
    let newShip = [];
    oldShip.forEach(block => { newShip.push({x: block.x - 1, y: block.y, m: block.m}); });
    return newShip;
  }

  function stepTop(oldShip) {
    let newShip = [];
    oldShip.forEach(block => { newShip.push({x: block.x, y: block.y - 1, m: block.m}); });
    return newShip;
  }

  function stepBottom(oldShip) {
    let newShip = [];
    oldShip.forEach(block => { newShip.push({x: block.x, y: block.y + 1, m: block.m}); });
    return newShip;
  }

  function rotateShip(oldShip) {
    let newShip = [];

    if (oldShip.length === 1) {
      oldShip.forEach(block => newShip.push({x: block.x, y: block.y, m: block.m})); // Если корабль однопалубный, то ничего не меняем.
    }

    if (oldShip.length === 2) {
      if (oldShip[0].y === oldShip[1].y) { // Если корабль горизонтальный переделываем его в вертикальный
        if (oldShip[0].y < 9) { // Если корабль можно вращать вниз - вращаем
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y + 1, m: oldShip[0].m});
        } else { // иначе вращаем вверх
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y - 1, m: oldShip[0].m});
        }
      } else { // если корабль вертикальный - переделываем его в горизонтальный
        if (oldShip[0].x < 9) { // Если можно вращать вправо - вращаем
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x + 1, y: oldShip[0].y, m: oldShip[0].m});
        } else { // иначе вращаем влево
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x - 1, y: oldShip[0].y, m: oldShip[0].m});
        }
      }
    }

    if (oldShip.length === 3) {
      if (oldShip[0].y === oldShip[1].y) { // Если корабль горизонтальный переделываем его в вертикальный
        if (oldShip[0].y < 8) { // Если корабль можно вращать вниз - вращаем
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y + 1, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y + 2, m: oldShip[0].m});
        } else { // иначе вращаем вверх
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y - 1, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y - 2, m: oldShip[0].m});
        }
      } else { // если корабль вертикальный - переделываем его в горизонтальный
        if (oldShip[0].x < 8) { // Если можно вращать вправо - вращаем
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x + 1, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x + 2, y: oldShip[0].y, m: oldShip[0].m});
        } else { // иначе вращаем влево
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x - 1, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x - 2, y: oldShip[0].y, m: oldShip[0].m});
        }
      }
    }

    if (oldShip.length === 4) {
      if (oldShip[0].y === oldShip[1].y) { // Если корабль горизонтальный переделываем его в вертикальный
        if (oldShip[0].y < 7) { // Если корабль можно вращать вниз - вращаем
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y + 1, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y + 2, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y + 3, m: oldShip[0].m});
        } else { // иначе вращаем вверх
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y - 1, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y - 2, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x, y: oldShip[0].y - 3, m: oldShip[0].m});
        }
      } else { // если корабль вертикальный - переделываем его в горизонтальный
        if (oldShip[0].x < 7) { // Если можно вращать вправо - вращаем
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x + 1, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x + 2, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x + 3, y: oldShip[0].y, m: oldShip[0].m});
        } else { // иначе вращаем влево
          newShip.push({x: oldShip[0].x, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x - 1, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x - 2, y: oldShip[0].y, m: oldShip[0].m});
          newShip.push({x: oldShip[0].x - 3, y: oldShip[0].y, m: oldShip[0].m});
        }
      }
    }

    return newShip;
  }

  function clearField(field) {
    for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < field[0].length; j++) {
        field[i][j] = 0;
      }
    }
  }

  function createFourDeckShip(marker) {
    let X = 0;
    let Y = 0;

    return ship = [{x: X, y: Y, m: marker}, {x: X+1, y: Y, m: marker}, {x: X+2, y: Y, m: marker}, {x: X+3, y: Y, m: marker}];
  }

  function createThreeDeckShip(marker) {
    let X = 0;
    let Y = 0;

    return ship = [{x: X, y: Y, m: marker}, {x: X+1, y: Y, m: marker}, {x: X+2, y: Y, m: marker}];
  }

  function createTwoDeckShip(marker) {
    let X = 0;
    let Y = 0;

    return ship = [{x: X, y: Y, m: marker}, {x: X+1, y: Y, m: marker}];
  }

  function createOneDeckShip(marker) {
    let X = 0;
    let Y = 0;

    return ship = [{x: X, y: Y, m: marker}];
  }

  function placeShipsOnField() {
    let flagForChooseShip = 40;

    let ship = createFourDeckShip('40');

    placeOnPlayerFieldMirror(ship);

    drawFieldInConsole(PLAYER_FIELD);
    drawFieldInConsole(PLAYER_FIELD_MIRROR);

    drawFieldInWindow(PLAYER_FIELD, 'player-');
    drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');

    document.querySelector('body').addEventListener('keydown', playerEventsForPlaceShips);

    function playerEventsForPlaceShips(event) {
      if (event.keyCode === 16) {
        ship = rotateShip(ship);
        console.clear();
        clearField(PLAYER_FIELD_MIRROR);
        placeOnPlayerFieldMirror(ship);

        drawFieldInConsole(PLAYER_FIELD);
        drawFieldInConsole(PLAYER_FIELD_MIRROR);

        drawFieldInWindow(PLAYER_FIELD, 'player-');
        drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
      }

      if (event.keyCode === 37) {
        if (isIntersectAnotherShip(stepLeft(ship), PLAYER_FIELD_MIRROR)) {
          ship = stepLeft(ship);
          console.clear();
          clearField(PLAYER_FIELD_MIRROR);
          placeOnPlayerFieldMirror(ship);

          drawFieldInConsole(PLAYER_FIELD);
          drawFieldInConsole(PLAYER_FIELD_MIRROR);

          drawFieldInWindow(PLAYER_FIELD, 'player-');
          drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
        }
      }

      if (event.keyCode === 38) {
        if (isIntersectAnotherShip(stepTop(ship), PLAYER_FIELD_MIRROR)) {
          ship = stepTop(ship);
          console.clear();
          clearField(PLAYER_FIELD_MIRROR);
          placeOnPlayerFieldMirror(ship);

          drawFieldInConsole(PLAYER_FIELD);
          drawFieldInConsole(PLAYER_FIELD_MIRROR);

          drawFieldInWindow(PLAYER_FIELD, 'player-');
          drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
        }
      }

      if (event.keyCode === 39) {
        if (isIntersectAnotherShip(stepRight(ship), PLAYER_FIELD_MIRROR)) {
          ship = stepRight(ship);
          console.clear();
          clearField(PLAYER_FIELD_MIRROR);
          placeOnPlayerFieldMirror(ship);

          drawFieldInConsole(PLAYER_FIELD);
          drawFieldInConsole(PLAYER_FIELD_MIRROR);

          drawFieldInWindow(PLAYER_FIELD, 'player-');
          drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
        }
      }

      if (event.keyCode === 40) {
        if (isIntersectAnotherShip(stepBottom(ship), PLAYER_FIELD_MIRROR)) {
          ship = stepBottom(ship);
          console.clear();
          clearField(PLAYER_FIELD_MIRROR);
          placeOnPlayerFieldMirror(ship);

          drawFieldInConsole(PLAYER_FIELD);
          drawFieldInConsole(PLAYER_FIELD_MIRROR);

          drawFieldInWindow(PLAYER_FIELD, 'player-');
          drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
        }
      }

      if (event.keyCode === 13) {
        if (isIntersectAnotherShip(ship, PLAYER_FIELD)) {
          console.clear();
          clearField(PLAYER_FIELD_MIRROR);
          placeOnPlayerField(ship);

          switch (flagForChooseShip) {
            case 40:
              ship = createThreeDeckShip('30');
              flagForChooseShip = 30;
              break;
            case 30:
              ship = createThreeDeckShip('31');
              flagForChooseShip = 31;
              break;
            case 31:
              ship = createTwoDeckShip('20');
              flagForChooseShip = 20;
              break;
            case 20:
              ship = createTwoDeckShip('21');
              flagForChooseShip = 21;
              break;
            case 21:
              ship = createTwoDeckShip('22');
              flagForChooseShip = 22;
              break;
            case 22:
              ship = createOneDeckShip('10');
              flagForChooseShip = 10;
              break;
            case 10:
              ship = createOneDeckShip('11');
              flagForChooseShip = 11;
              break;
            case 11:
              ship = createOneDeckShip('12');
              flagForChooseShip = 12;
              break;
            case 12:
              ship = createOneDeckShip('13');
              flagForChooseShip = 13;
              break;
            case 13:
              flagForChooseShip = 14;
              break;
          }

          placeOnPlayerFieldMirror(ship);

          drawFieldInConsole(PLAYER_FIELD);
          drawFieldInConsole(PLAYER_FIELD_MIRROR);

          drawFieldInWindow(PLAYER_FIELD, 'player-');
          drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
        }

        if (flagForChooseShip === 14) {
          document.querySelector('body').removeEventListener('keydown', playerEventsForPlaceShips)
          console.clear();

          document.querySelector('.player-field-mirror').style.visibility = 'hidden';
          document.querySelector('.player-field').style.visibility = 'inherit';
          document.querySelector('.enemy-field').style.visibility = 'hidden';

          drawFieldInConsole(ENEMY_FIELD);
          drawFieldInConsole(PLAYER_FIELD);

          drawFieldInWindow(ENEMY_FIELD, 'enemy-');
          drawFieldInWindow(PLAYER_FIELD, 'player-');

          setTimeout(() => {
            document.querySelector('.player-field').style.visibility = 'hidden';
            document.querySelector('.enemy-field').style.visibility = 'inherit';
          }, 2000);
        }
      }
    }
  }

  placeShipsOnField();
}

generateEnemyShips();
generatePlayerShips();

// Отрисовывают игровые поля в консоли
function drawFieldInConsole(FIELD) {
  let fieldStr = '';
  FIELD.forEach(row => {
    let rowStr = '\t';
    row.forEach(cell => {
      rowStr += cell + '\t';
    });
    fieldStr += rowStr + '\n\n';
  });

  console.log(fieldStr);
}

// Отрисовываются игровые поля в окне браузера
function drawFieldInWindow(FIELD, PREFIX) {
  const prefix = PREFIX;

  for (let row = 0; row < FIELD.length; ++row) {
    for (let cell = 0; cell < FIELD[0].length; ++cell) {
      const id = prefix + row + cell;

      FIELD[row][cell] === 0 ?
        document.querySelector(`#${id}`).style = 'background-color: #fff' :
        prefix === 'enemy-' ?
          document.querySelector(`#${id}`).style = 'background-color: rgba(150, 150, 150, 0)' :
          document.querySelector(`#${id}`).style = 'background-color: #777';
    }
  }
}
