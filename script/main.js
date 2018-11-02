function StartBattleShip() {
  const string_data = {
    EN: {
      miss: 'Miss',
      injure: 'Injured',
      kill: 'Killed',
      stepComputer: 'Computer step',
      stepPlayer: 'Player step'
    },
    RU: {
      miss: 'Промах',
      injure: 'Ранен',
      kill: 'Убит',
      stepComputer: 'Шаг компьютера',
      stepPlayer: 'Шаг игрока'
    },
    CH: {
      miss: '失敗',
      injure: '受傷',
      kill: '殺害',
      stepComputer: '计算机举动',
      stepPlayer: '球员的举动'
    },
  }

  let enemy_life = 20;
  let player_life = 20;

  let sound = 'on';
  let current_lang = 'EN';

  function preparationForTheGame() {
    hideShipMoveButtons();

    // Обрабатываем нажатие на кнопку включения и отключения звука в приложении.
    const sound_button = document.querySelector('#dynamic');
    sound_button.addEventListener('click', event => {
      sound === 'on' ? sound = 'off' : sound = 'on';
      console.log(sound);

      if (sound === 'on') {
        sound_button.classList.remove("dynamic-off");
        sound_button.classList.add("dynamic-on");
      }

      if (sound === 'off') {
        sound_button.classList.remove("dynamic-on");
        sound_button.classList.add("dynamic-off");
      }
    });

    // Обрабатываем нажатие на кнопку начала игры или просто Старт.
    const start = document.querySelector('#start');
    start.addEventListener('click', event => {
      // Обрабатываем выбор языка интерфейса приложения.
      const langs = document.querySelector('#langs');
      current_lang = langs.value;

      setTimeout(function() {
        document.querySelector('.start-page').style = 'display: none';
        document.querySelector('.player-field').style = 'display: block';
        document.querySelector('.player-field-mirror').style = 'display: block';
        document.querySelector('.enemy-field').style = 'display: block';

        startGame();
      }, 800);
    });
  }

  function startGame() {
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

    // Загружаем аудиоплееры
    const fonMusic = document.querySelector('#fonMusic');
    const actionSounds = document.querySelector('#actionSounds');

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
        showShipMoveButtons();

        let flagForChooseShip = 40;

        let ship = createFourDeckShip('40');

        placeOnPlayerFieldMirror(ship);

        drawFieldInConsole(PLAYER_FIELD);
        drawFieldInConsole(PLAYER_FIELD_MIRROR);

        drawFieldInWindow(PLAYER_FIELD, 'player-');
        drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');

        // Вешаем обработчики событий для кнопок размещения корабля игрока в окне браузера.
        document.querySelector('#moveLeft').addEventListener('click', event => {
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
        });
        document.querySelector('#moveUp').addEventListener('click', event => {
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
        });
        document.querySelector('#moveRight').addEventListener('click', event => {
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
        });
        document.querySelector('#moveDown').addEventListener('click', event => {
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
        });
        document.querySelector('#rotate').addEventListener('click', event => {
          ship = rotateShip(ship);
          console.clear();
          clearField(PLAYER_FIELD_MIRROR);
          placeOnPlayerFieldMirror(ship);

          drawFieldInConsole(PLAYER_FIELD);
          drawFieldInConsole(PLAYER_FIELD_MIRROR);

          drawFieldInWindow(PLAYER_FIELD, 'player-');
          drawFieldInWindow(PLAYER_FIELD_MIRROR, 'player-mirror-');
        });
        document.querySelector('#setShip').addEventListener('click', event => {
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

            document.querySelector('.player-field-mirror').style.display = 'none';
            document.querySelector('.player-field').style.display = 'block';
            document.querySelector('.enemy-field').style.display = 'none';

            drawFieldInConsole(ENEMY_FIELD);
            drawFieldInConsole(PLAYER_FIELD);

            drawFieldInWindow(ENEMY_FIELD, 'enemy-');
            drawFieldInWindow(PLAYER_FIELD, 'player-');

            setTimeout(() => {
              hideShipMoveButtons();

              document.querySelector('.player-field').style.display = 'none';
              document.querySelector('.enemy-field').style.display = 'block';

              // Начинаем игру!
              gaming();
            }, 2000);
          }
        });

        // Вешаем обработчик событий для размещения кораблей игрока с клавиатуры.
        document.querySelector('body').addEventListener('keydown', playerEventsForPlaceShips);
        // Функция для размещения кораблей игрока с калвиатуры.
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

              document.querySelector('.player-field-mirror').style.display = 'none';
              document.querySelector('.player-field').style.display = 'block';
              document.querySelector('.enemy-field').style.display = 'none';

              drawFieldInConsole(ENEMY_FIELD);
              drawFieldInConsole(PLAYER_FIELD);

              drawFieldInWindow(ENEMY_FIELD, 'enemy-');
              drawFieldInWindow(PLAYER_FIELD, 'player-');

              setTimeout(() => {
                hideShipMoveButtons();

                document.querySelector('.player-field').style.display = 'none';
                document.querySelector('.enemy-field').style.display = 'block';

                // Начинаем игру!
                gaming();
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

          if (FIELD[row][cell] === 0) {
            document.querySelector(`#${id}`).targetZone = 'sea';
            document.querySelector(`#${id}`).style.background = 'url("src/img/fog.png") no-repeat center center / cover';
          } else {
            if (prefix === 'enemy-') {
              document.querySelector(`#${id}`).targetZone = 'ship';
              document.querySelector(`#${id}`).style.background = 'url("src/img/fog.png") no-repeat center center / cover';
            } else {
              document.querySelector(`#${id}`).targetZone = 'ship';
              document.querySelector(`#${id}`).style.background = 'url("src/img/ship.png") no-repeat center center / cover';
            }
          }
        }
      }
    }

    // Очищается поле от кораблей.
    function clearField(field) {
      for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[0].length; j++) {
          field[i][j] = 0;
        }
      }
    }

    /*
      Основной игровой процесс
    */

    // Функция вызывается в методе generatePlayerShips после того как игрок расставит все свои корабли!
    function gaming() {
      try {
        if (sound === 'on') {
          fonMusic.src = 'src/audio/sea.mp3';
          fonMusic.play();
        }
      } catch (exeption) {}

      const player_field = document.querySelector('.player-field');
      const enemy_field = document.querySelector('.enemy-field');

      // Функция находит текущую цель, по которой производится атака.
      // В качестве аргументов принимает Поле в котором следует искать, префикс id, координату x, координату y.
      // Возвращает массив с координатами и id текущего корабля.
      function findTargetShip(FIELD, prefix, X, Y) {
        // Сначала находим корабль в который попали.
        const currentShip = [];
        const shipMarker = FIELD[Y][X];
        currentShip.push({id: `#${prefix}${Y}${X}`, x: X, y: Y});

        try {
          if (FIELD[Y-1][X] === shipMarker) {
            currentShip.push({id: `#${prefix}${Y-1}${X}`, x: X, y: Y-1});
            if (FIELD[Y-2][X] === shipMarker) {
              currentShip.push({id: `#${prefix}${Y-2}${X}`, x: X, y: Y-2});
              if (FIELD[Y-3][X] === shipMarker) {
                currentShip.push({id: `#${prefix}${Y-3}${X}`, x: X, y: Y-3});
              }
            }
          }
        } catch(exeption) {}
        try {
          if (FIELD[Y+1][X] === shipMarker) {
            currentShip.push({id: `#${prefix}${Y+1}${X}`, x: X, y: Y+1});
            if (FIELD[Y+2][X] === shipMarker) {
              currentShip.push({id: `#${prefix}${Y+2}${X}`, x: X, y: Y+2});
              if (FIELD[Y+3][X] === shipMarker) {
                currentShip.push({id: `#${prefix}${Y+3}${X}`, x: X, y: Y+3});
              }
            }
          }
        } catch(exeption) {}
        try {
          if (FIELD[Y][X-1] === shipMarker) {
            currentShip.push({id: `#${prefix}${Y}${X-1}`, x: X-1, y: Y});
            if (FIELD[Y][X-2] === shipMarker) {
              currentShip.push({id: `#${prefix}${Y}${X-2}`, x: X-2, y: Y});
              if (FIELD[Y][X-3] === shipMarker) {
                currentShip.push({id: `#${prefix}${Y}${X-3}`, x: X-3, y: Y});
              }
            }
          }
        } catch(exeption) {}
        try {
          if (FIELD[Y][X+1] === shipMarker) {
            currentShip.push({id: `#${prefix}${Y}${X+1}`, x: X+1, y: Y});
            if (FIELD[Y][X+2] === shipMarker) {
              currentShip.push({id: `#${prefix}${Y}${X+2}`, x: X+2, y: Y});
              if (FIELD[Y][X+3] === shipMarker) {
                currentShip.push({id: `#${prefix}${Y}${X+3}`, x: X+3, y: Y});
              }
            }
          }
        } catch(exeption) {}

        return currentShip;
      }

      // Функция проверяет ранен корабль по которому попали либо убит.
      // В качестве аргумента принимает массив, состоящий из координат и id текущего корабля, по котормоу произведен выстрел.
      // а также строку по какому полю производится атака: 'player' или 'enemy'.
      // Возвращает true если корабль ранен, false если корабль убит.
      function isShipAlive(targetShip, targetField) {
        let isAlive = false;

        if (targetField === 'player') {
          targetShip.forEach(block => {
            if (player_field.querySelector(block.id).targetZone === 'ship') {
              isAlive = true;
            }
          });
        }

        if (targetField === 'enemy') {
          targetShip.forEach(block => {
            if (enemy_field.querySelector(block.id).targetZone === 'ship') {
              isAlive = true;
            }
          });
        }

        return isAlive;
      }

      // Шаг игрока.
      function playerStep() {
        showPlayerStep();

        // Шаг игрока, значит скрываем поле игрока и отбражаем поле компьютера
        enemy_field.style.display = 'block';
        player_field.style.display = 'none';

        enemy_field.addEventListener('click', playerShot);

        function playerShot(event) {
          // Находим координаты выстрела игрока.
          let x = +(event.target.id.slice(-1));
          let y = +(event.target.id.slice(-2, -1));

          // Если попал
          if (event.target.targetZone === 'ship') {
            enemy_field.removeEventListener('click', playerShot);

            event.target.targetZone = 'ship-injured';
            event.target.style.background = 'url("src/img/injure-ship.png") no-repeat center center / cover';
            --enemy_life;

            // Массив ячеек где точно нет кораблей.
            const diagonalCellsID = [
              `#enemy-${y-1}${x-1}`,
              `#enemy-${y-1}${x+1}`,
              `#enemy-${y+1}${x-1}`,
              `#enemy-${y+1}${x+1}`
            ];

            // Закрашиваем клетки расположенные по диагонали в синий
            diagonalCellsID.forEach(cellID => {
              try{
                enemy_field.querySelector(cellID).style.background = 'none';
                enemy_field.querySelector(cellID).targetZone = 'sea-busy';
              } catch(exeption) {}
            });

            const target = findTargetShip(ENEMY_FIELD, 'enemy-', x, y);

            if (isShipAlive(target, 'enemy')) {
              massage(2, string_data[current_lang].injure);

              if (sound === 'on') {
                actionSounds.src = 'src/audio/injure.mp3';
                actionSounds.play();
              }
            } else {
              massage(3, string_data[current_lang].kill);

              if (sound === 'on') {
                actionSounds.src = 'src/audio/kill.mp3';
                actionSounds.play();
              }

              // Закрашиваем поле вокруг корабля в синий цвет.
              target.forEach(block => {
                try{
                  if (enemy_field.querySelector(`#enemy-${block.y-1}${block.x}`).targetZone !== 'ship-injured') {
                    enemy_field.querySelector(`#enemy-${block.y-1}${block.x}`).style.background = 'none';
                    enemy_field.querySelector(`#enemy-${block.y-1}${block.x}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}

                try{
                  if (enemy_field.querySelector(`#enemy-${block.y}${block.x+1}`).targetZone !== 'ship-injured') {
                    enemy_field.querySelector(`#enemy-${block.y}${block.x+1}`).style.background = 'none';
                    enemy_field.querySelector(`#enemy-${block.y}${block.x+1}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}

                try{
                  if (enemy_field.querySelector(`#enemy-${block.y+1}${block.x}`).targetZone !== 'ship-injured') {
                    enemy_field.querySelector(`#enemy-${block.y+1}${block.x}`).style.background = 'none';
                    enemy_field.querySelector(`#enemy-${block.y+1}${block.x}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}

                try{
                  if (enemy_field.querySelector(`#enemy-${block.y}${block.x-1}`).targetZone !== 'ship-injured') {
                    enemy_field.querySelector(`#enemy-${block.y}${block.x-1}`).style.background = 'none';
                    enemy_field.querySelector(`#enemy-${block.y}${block.x-1}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}
              });
            }

            playerStep();
          }
          // Если уже стрелял по этой ячейке
          if (event.target.targetZone === 'ship-injured' ||
              event.target.targetZone === 'sea-busy') {
            enemy_field.removeEventListener('click', playerShot);

            event.target.classList.add('miss');
            setTimeout(function() {
              event.target.classList.remove('miss');
            }, 300);

            playerStep();
          }
          // Если промахнулся
          if (event.target.targetZone === 'sea') {
            if (sound === 'on') {
              actionSounds.src = 'src/audio/miss.mp3';
              actionSounds.play();
            }

            enemy_field.removeEventListener('click', playerShot);

            event.target.style.background = 'none';
            event.target.targetZone = 'sea-busy';

            massage(1, string_data[current_lang].miss);

            hidePlayerStep();

            setTimeout(() => {
              enemyStep();
            }, 1000);
          }

          // Если выиграл
          if (enemy_life <= 0) {
            showTargetZoneAttribute('enemy-');

            setTimeout(() => {
              clearField(ENEMY_FIELD);
              clearField(PLAYER_FIELD);
              drawFieldInWindow(ENEMY_FIELD, 'enemy-');
              drawFieldInWindow(PLAYER_FIELD, 'player-');
              enemy_life = 20;
              player_life = 20;

              document.querySelector('.player-field').style.display = 'none';
              document.querySelector('.enemy-field').style.display = 'none';
              document.querySelector('#whosStepIsNow').style.display = 'none';
              document.querySelector('.win-page').style.display = 'block';
            }, 2000);
          }
        }
      }

      // Шаг компьютера.
      let probableTargets = [];
      function enemyStep() {
        showComputerStep();

        // Шаг компьютера. Значит поле компьютера скрываем, отображаем поле игрока.
        player_field.style.display = 'block';
        enemy_field.style.display = 'none';

        let x = 0;
        let y = 0;

        // Если вероятные цели есть используем одну из доступных,
        // Иначе генерируем случайные координаты
        if (probableTargets.length > 0) {
          const magic_number = Math.floor(Math.random() * probableTargets.length);
          x = probableTargets[magic_number].x;
          y = probableTargets[magic_number].y;
        } else {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        }
        const target_id = '#player-' + y + x;

        // Если есть попадание.
        if (player_field.querySelector(target_id).targetZone === 'ship') {
          // Фокусируемся на цели
          player_field.querySelector(target_id).classList.add('targeting');

          setTimeout(function() {
            player_field.querySelector(target_id).classList.remove('targeting');

            // Уменьщаем жизнь игрока на единицу и закрашиваем клетку в красный цвет.
            player_life--;
            player_field.querySelector(target_id).style.background = 'url("src/img/injure-ship.png") no-repeat center center / cover';
            player_field.querySelector(target_id).targetZone = 'ship-injured';

            // Массив ячеек где точно нет кораблей.
            const diagonalCellsID = [
              `#player-${y-1}${x-1}`,
              `#player-${y-1}${x+1}`,
              `#player-${y+1}${x-1}`,
              `#player-${y+1}${x+1}`
            ];
            // Массив ячеек где возможно продолжение корабля.
            const perpendicularCells = [
              {id: `#player-${y}${x-1}`, x: x-1, y: y},
              {id: `#player-${y-1}${x}`, x: x, y: y-1},
              {id: `#player-${y}${x+1}`, x: x+1, y: y},
              {id: `#player-${y+1}${x}`, x: x, y: y+1}
            ];

            // Закрашиваем клетки расположенные по диагонали в синий
            diagonalCellsID.forEach(cellID => {
              try{
                player_field.querySelector(cellID).style.background = 'none';
                player_field.querySelector(cellID).targetZone = 'sea-busy';
              } catch(exeption) {}
            });

            const target = findTargetShip(PLAYER_FIELD, 'player-', x, y);

            if (isShipAlive(target, 'player')) { // Если корабль ранен
              // Проверяем клетки расположенные перпендикулярно.
              // Если цвет клеток белый или серый, то добавляем в массив возможных целей.
              perpendicularCells.forEach(cell => {
                try {
                  if (player_field.querySelector(cell.id).targetZone === 'ship' ||
                      player_field.querySelector(cell.id).targetZone === 'sea') {
                    probableTargets.push({x: cell.x, y: cell.y});
                  }
                } catch(exeption) {}
              });

              if (sound === 'on') {
                actionSounds.src = 'src/audio/injure.mp3';
                actionSounds.play();
              }

              massage(1, string_data[current_lang].injure);

              // Повторяем ход
              setTimeout(() => {
                enemyStep();
              }, 2000);
            } else { // Если корабль убит
              // Закрашиваем поле вокруг корабля в синий цвет
              target.forEach(block => {
                try{
                  if (player_field.querySelector(`#player-${block.y-1}${block.x}`).targetZone !== 'ship-injured') {
                    player_field.querySelector(`#player-${block.y-1}${block.x}`).style.background = 'none';
                    player_field.querySelector(`#player-${block.y-1}${block.x}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}

                try{
                  if (player_field.querySelector(`#player-${block.y}${block.x+1}`).targetZone !== 'ship-injured') {
                    player_field.querySelector(`#player-${block.y}${block.x+1}`).style.background = 'none';
                    player_field.querySelector(`#player-${block.y}${block.x+1}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}

                try{
                  if (player_field.querySelector(`#player-${block.y+1}${block.x}`).targetZone !== 'ship-injured') {
                    player_field.querySelector(`#player-${block.y+1}${block.x}`).style.background = 'none';
                    player_field.querySelector(`#player-${block.y+1}${block.x}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}

                try{
                  if (player_field.querySelector(`#player-${block.y}${block.x-1}`).targetZone !== 'ship-injured') {
                    player_field.querySelector(`#player-${block.y}${block.x-1}`).style.background = 'none';
                    player_field.querySelector(`#player-${block.y}${block.x-1}`).targetZone = 'sea-busy';
                  }
                } catch(exeption) {}
              });

              if (sound === 'on') {
                actionSounds.src = 'src/audio/kill.mp3';
                actionSounds.play();
              }

              massage(1, string_data[current_lang].kill);

              // Зачищаем массив возможных целей
              probableTargets = [];

              //Проверяем жизнь игрока, то есть проверка на окончание игры.
              if  (player_life <= 0) {
                setTimeout(() => {
                  document.querySelector('.player-field').style.display = 'none';
                  document.querySelector('.enemy-field').style.display = 'none';
                  document.querySelector('#whosStepIsNow').style.display = 'none';
                  document.querySelector('.loose-page').style.display = 'block';
                }, 2000);
              } else {
                setTimeout(() => {
                  enemyStep();
                }, 2000);
              }
            }
          }, 1000);
        } else if (player_field.querySelector(target_id).targetZone === 'sea-busy' ||
                   player_field.querySelector(target_id).targetZone === 'ship-injured') {
          // Сюда уже стреляли
          enemyStep();
        } else {
          // Фокусируемся на цели
          player_field.querySelector(target_id).classList.add('targeting');

          setTimeout(function() {
            if (sound === 'on') {
              actionSounds.src = 'src/audio/miss.mp3';
              actionSounds.play();
            }

            massage(1, string_data[current_lang].miss);

            hideComputerStep();

            player_field.querySelector(target_id).classList.remove('targeting');
            // Отмечаем клетку
            player_field.querySelector(target_id).style.background = 'none';
            player_field.querySelector(target_id).targetZone = 'sea-busy';

            // Передаем ход игроку ...
            setTimeout(() => {
              playerStep();
            }, 2000);
          }, 1000);
        }
      }

      // Начинаем игру с хода игрока.
      playerStep();
    }

    // Функция выводит ссобщение о промахе, ранении либо убийстве.
    // Принимает в качестве аргументов статус и текст. Текст выводится клиенту.
    // status: 1 - miss; 2 - injured; 3 - killed;
    function massage(status, text) {
      let box = {/* DOM node */};

      if (status === 1) {
        box = document.getElementById('msg-miss');
      }
      if (status === 2) {
        box = document.getElementById('msg-injured');
      }
      if (status === 3) {
        box = document.getElementById('msg-killed');
      }

      box.textContent = text;

      box.style = `font-size: ${box.clientHeight / 2}px; visibility: visible; z-index: 50;`;

      let count = 1;
      let timer = setInterval(function() {
        box.style = `font-size: ${box.clientHeight / 2}px; opacity: ${count}; visibility: visible; z-index: 50;`;

        if (count <= 0) {
          box.style = `font-size: ${box.clientHeight / 2}px; opacity: ${count}; visibility: visible; z-index: 1;`;
      		clearInterval(timer);
      	}

      	count = count - 0.1;
      }, 100);
    }

    // Функции показывают кому принадлежит текущий ход.
    // При отображении поля игрока - ход компьютера, при отображении поля компьютера - ход игрока.
    function showPlayerStep() {
      const whosStep = document.querySelector('#whosStepIsNow');
      const text = string_data[current_lang].stepPlayer;
      let opacityValue = 0;
      whosStep.textContent = text;
      const timer = setInterval(function() {
        if (opacityValue >= 0.9) clearInterval(timer);
        whosStep.style = `opacity: ${opacityValue};
                          font-size: ${whosStep.clientHeight / 2}px;
                          display: block;`;
        opacityValue += 0.1;
      }, 50);
    }
    function hidePlayerStep() {
      const whosStep = document.querySelector('#whosStepIsNow');
      let opacityValue = 1;
      const timer = setInterval(function() {
        if (opacityValue <= 0.1) clearInterval(timer);
        whosStep.style = `opacity: ${opacityValue};
                          font-size: ${whosStep.clientHeight / 2}px;
                          display: block;`;
        opacityValue -= 0.1;
      }, 50);
    }
    function showComputerStep() {
      const whosStep = document.querySelector('#whosStepIsNow');
      const text = string_data[current_lang].stepComputer;
      let opacityValue = 0;
      whosStep.textContent = text;
      const timer = setInterval(function() {
        if (opacityValue >= 0.9) clearInterval(timer);
        whosStep.style = `opacity: ${opacityValue};
                          font-size: ${whosStep.clientHeight / 2}px;
                          display: block;`;
        opacityValue += 0.1;
      }, 50);
    }
    function hideComputerStep() {
      const whosStep = document.querySelector('#whosStepIsNow');
      let opacityValue = 1;
      const timer = setInterval(function() {
        if (opacityValue <= 0.1) clearInterval(timer);
        whosStep.style = `opacity: ${opacityValue};
                          font-size: ${whosStep.clientHeight / 2}px;
                          display: block;`;
        opacityValue -= 0.1;
      }, 50);
    }

    // Начинаем игру заново
    document.querySelector('#playAgainForWin').addEventListener('click', startNewGame);
    document.querySelector('#playAgainForLoose').addEventListener('click', startNewGame);
    function startNewGame() {
      clearField(ENEMY_FIELD);
      clearField(PLAYER_FIELD);
      drawFieldInWindow(ENEMY_FIELD, 'enemy-');
      drawFieldInWindow(PLAYER_FIELD, 'player-');

      document.querySelector('.start-page').style = 'display: block';
      document.querySelector('.player-field-mirror').style = 'display: none';
      document.querySelector('.win-page').style = 'display: none';
      document.querySelector('.loose-page').style = 'display: none';

      StartBattleShip();
    }
  }

  // Фнкции отображения и скрытия кнопок для размещения кораблей игрока.
  function showShipMoveButtons() {
    document.querySelector('#moveLeft').style.display = 'block';
    document.querySelector('#moveUp').style.display = 'block';
    document.querySelector('#moveRight').style.display = 'block';
    document.querySelector('#moveDown').style.display = 'block';
    document.querySelector('#rotate').style.display = 'block';
    document.querySelector('#setShip').style.display = 'block';
  }
  function hideShipMoveButtons() {
    document.querySelector('#moveLeft').style.display = 'none';
    document.querySelector('#moveUp').style.display = 'none';
    document.querySelector('#moveRight').style.display = 'none';
    document.querySelector('#moveDown').style.display = 'none';
    document.querySelector('#rotate').style.display = 'none';
    document.querySelector('#setShip').style.display = 'none';
  }

  preparationForTheGame();
}

StartBattleShip();

// Метод для теста.
function showTargetZoneAttribute(prefix) {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      console.log(`${prefix}${y}${x}` + ' - ' + document.querySelector(`#${prefix}${y}${x}`).targetZone);
    }
  }
}
