class Player {
  constructor(playerField) {
    this.field = playerField;
    this.fieldMirror = playerField;
  }

  createShip(size) {
    const ship = [];

    for (let i = 0; i < size; i++) {
      ship.push({x: i, y: 0});
    }

    return ship;
  }

  placeShip(ship) {
    function isIntersect(field, ship) {
      let flag = true;

      ship.forEach(block => {
        if (field[block.y][block.x] === '1' || field[block.y][block.x] === '2') {
          flag = false;
        }
      });

      return flag;
    }

    const controls = {
      stepLeft: function() {
        console.log('Step to left!');
      },

      stepUp: function() {
        console.log('Step to up!');
      },

      stepDown: function() {
        console.log('Step to down!');
      },

      stepRight: function() {
        console.log('Step to right!');
      },

      rotate: function() {
        console.log('Ship rotated!');
      },

      setShip: function() {
        console.log('Ship is seted!');
      }
    };

    controls.stepLeft();
    controls.stepUp();
    controls.stepDown();
    controls.stepRight();
    controls.rotate();
    controls.setShip();
  }
}
