class Player {
  constructor(playerField) {
    this.field = playerField;
    this.fieldMirror = playerField.map(row => row.map(cell => cell));
  }

  createShip(size) {
    const ship = [];

    for (let i = 0; i < size; i++) {
      ship.push({x: i, y: 0});
    }

    return ship;
  }

  placeShip(ship, field) {
    let flag = true;

    function isIntersect(field, ship) {
      let flag = true;

      ship.forEach(block => {
        if (field[block.y][block.x] === '1' || field[block.y][block.x] === '2') {
          flag = false;
        }
      });

      return flag;
    }

    if (isIntersect(field, ship)) {
      ship.forEach(block => {
        field[block.y][block.x] = '2';
      });

      if (ship.length > 1) {
        if (ship[0].y === ship[1].y) {
          if (ship[0].x === 0 && ship[0].y === 0) {
            field[ship[0].y + 1][ship[0].x] = '1';
            field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';
            field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
            field[ship[0].y][ship[ship.length - 1].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 0) {
            tfield[ship[0].y + 1][ship[0].x] = '1';
            field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
            tfield[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';
            tfield[ship[0].y][ship[ship.length - 1].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 9) {
            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
            field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
            field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[0].y - 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 0 && ship[0].y === 9) {
            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
            field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
            field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[0].y - 1][ship[i].x] = '1';
            }
          } else if (ship[0].y === 0) {
            if (ship[0].x < ship[1].x) {
              field[ship[0].y + 1][ship[0].x] = '1';
              field[ship[0].y][ship[0].x - 1] = '1';
              field[ship[0].y + 1][ship[0].x - 1] = '1';
              field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
              field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
              field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                field[ship[0].y + 1][ship[i].x] = '1';
              }
            } else {
              field[ship[0].y + 1][ship[0].x] = '1';
              field[ship[0].y][ship[0].x + 1] = '1';
              field[ship[0].y + 1][ship[0].x + 1] = '1';
              field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
              field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
              field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                field[ship[0].y + 1][ship[i].x] = '1';
              }
            }
          } else if (ship[0].y === 9) {
            if (ship[0].x < ship[1].x) {
              field[ship[0].y - 1][ship[0].x] = '1';
              field[ship[0].y][ship[0].x - 1] = '1';
              field[ship[0].y - 1][ship[0].x - 1] = '1';
              field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
              field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
              field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                field[ship[0].y - 1][ship[i].x] = '1';
              }
            } else {
              field[ship[0].y - 1][ship[0].x] = '1';
              field[ship[0].y][ship[0].x + 1] = '1';
              field[ship[0].y - 1][ship[0].x + 1] = '1';
              field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
              field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
              field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                field[ship[0].y - 1][ship[i].x] = '1';
              }
            }
          } else if (ship[0].x === 0) {
            field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
            field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';
            field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              field[ship[0].y - 1][ship[i].x] = '1';
              field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 9) {
            field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
            field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';
            field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              field[ship[0].y - 1][ship[i].x] = '1';
              field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else {
            if (ship[0].x < ship[1].x) {
              field[ship[0].y][ship[0].x - 1] = '1';
              field[ship[0].y - 1][ship[0].x - 1] = '1';
              field[ship[0].y + 1][ship[0].x - 1] = '1';
              field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
              field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';
              field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';
            } else {
              field[ship[0].y][ship[0].x + 1] = '1';
              field[ship[0].y - 1][ship[0].x + 1] = '1';
              field[ship[0].y + 1][ship[0].x + 1] = '1';
              field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
              field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';
              field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';
            }

            for (let i = 0; i < ship.length; i++) {
              field[ship[0].y - 1][ship[i].x] = '1';
              field[ship[0].y + 1][ship[i].x] = '1';
            }
          }
        }

        if (ship[0].x === ship[1].x) {
          if (ship[0].x === 0 && ship[0].y === 0) {
            field[ship[0].y][ship[0].x + 1] = '1';
            field[ship[ship.length - 1].y][ship[0].x + 1] = '1';
            field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
            field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[i].y][ship[0].x + 1] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 0) {
            field[ship[0].y][ship[0].x - 1] = '1';
            field[ship[ship.length - 1].y][ship[0].x - 1] = '1';
            field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
            field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 9) {
            field[ship[0].y][ship[0].x - 1] = '1';
            field[ship[ship.length - 1].y][ship[0].x - 1] = '1';
            field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
            field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].x === 0 && ship[0].y === 9) {
            field[ship[0].y][ship[0].x + 1] = '1';
            field[ship[ship.length - 1].y][ship[0].x + 1] = '1';
            field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
            field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              field[ship[i].y][ship[0].x + 1] = '1';
            }
          } else if (ship[0].y === 0) {
            field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';
            field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
            field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              field[ship[i].y][ship[0].x + 1] = '1';
              field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].y === 9) {
            field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';
            field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
            field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              field[ship[i].y][ship[0].x + 1] = '1';
              field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].x === 0) {
            if (ship[0].y < ship[1].y) {
              field[ship[0].y - 1][ship[0].x] = '1';
              field[ship[0].y - 1][ship[0].x + 1] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                field[ship[i].y][ship[0].x + 1] = '1';
              }
            } else {
              field[ship[0].y + 1][ship[0].x] = '1';
              field[ship[0].y + 1][ship[0].x + 1] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                field[ship[i].y][ship[0].x + 1] = '1';
              }
            }
          } else if (ship[0].x === 9) {
            if (ship[0].y < ship[1].y) {
              field[ship[0].y - 1][ship[0].x] = '1';
              field[ship[0].y - 1][ship[0].x - 1] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                field[ship[i].y][ship[0].x - 1] = '1';
              }
            } else {
              field[ship[0].y + 1][ship[0].x] = '1';
              field[ship[0].y + 1][ship[0].x - 1] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                field[ship[i].y][ship[0].x - 1] = '1';
              }
            }
          } else {
            if (ship[0].y < ship[1].y) {
              field[ship[0].y - 1][ship[0].x - 1] = '1';
              field[ship[0].y - 1][ship[0].x] = '1';
              field[ship[0].y - 1][ship[0].x + 1] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
              field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                field[ship[i].y][ship[0].x + 1] = '1';
                field[ship[i].y][ship[0].x - 1] = '1';
              }
            } else {
              field[ship[0].y + 1][ship[0].x - 1] = '1';
              field[ship[0].y + 1][ship[0].x] = '1';
              field[ship[0].y + 1][ship[0].x + 1] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
              field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                field[ship[i].y][ship[0].x + 1] = '1';
                field[ship[i].y][ship[0].x - 1] = '1';
              }
            }
          }
        }
      } else {
        if (ship[0].y === 0 && ship[0].x === 0) {
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 0 && ship[0].x === 9) {
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].y === 9 && ship[0].x === 9) {
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
        } else if (ship[0].y === 9 && ship[0].x === 0) {
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
        } else if (ship[0].x === 0) {
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].x === 9) {
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].y === 0) {
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 9) {
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
        } else {
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
        }

      }
    } else {
      flag = false;
    }

    return flag;
  }

  getPlayerField() {
    return this.field;
  }

  getPlayerFieldMirror() {
    return this.fieldMirror;
  }

  clearMirror() {
    this.fieldMirror = this.fieldMirror.map(row => row.map(cell => cell = '0'));
  }

  stepLeft(ship) {
    console.log('Step to left!');
  }

  stepUp(ship) {
    console.log('Step to up!');
  }

  stepDown(ship) {
    if (ship[ship.length - 1].y < this.field.length) {
      ship.forEach(block => {
        block.y + 1;
      });
    }
  }

  stepRight(ship) {
    if (ship[ship.length - 1].x < this.field[0].length) {
      ship.forEach(block => {
        block.x + 1;
      });
    }
  }

  rotate(ship) {
    if (ship.length > 1) {
      ship.forEach(block => {
        let z = 0;
        z = block.x;
        block.x = block.y;
        block.y = z;
      });

      if (ship[ship.length - 1].x > this.field[0].length - 1) {
        while (ship[ship.length - 1].x > this.field[0].length - 1) {
          ship.forEach(block => {
            block.x = block.x - 1;
          });
        }
      }

      if (ship[ship.length - 1].y > this.field.length - 1) {
        while (ship[ship.length - 1].y > this.field.length - 1) {
          ship.forEach(block => {
            block.y = block.y - 1;
          });
        }
      }
    }
  }

  setShip(ship) {
    console.log('Ship is seted!');
  }
}
