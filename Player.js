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
            ship.forEach(block => {
              field[block.y + 1][block.x] = '1';
            });

            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y][ship[ship.length-1].x + 1] = '1';
          } else if (ship[ship.length - 1].x === field.length - 1 && ship[0].y === 0) {
            ship.forEach(block => {
              field[block.y + 1][block.x] = '1';
            });

            field[ship[0].y + 1][ship[0].x - 1] = '1';
            field[ship[0].y][ship[0].x - 1] = '1';
          } else if (ship[ship.length - 1].x === field.length - 1 && ship[ship.length - 1].y === field.length - 1) {
            ship.forEach(block => {
              field[block.y - 1][block.x] = '1';
            });

            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[0].y][ship[0].x - 1] = '1';
          } else if (ship[0].x === 0 && ship[ship.length - 1].y === field.length - 1) {
            ship.forEach(block => {
              field[block.y - 1][block.x] = '1';
            });

            field[ship[ship.length-1].y - 1][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y][ship[ship.length-1].x + 1] = '1';
          } else if (ship[0].y === 0) {
            ship.forEach(block => {
              field[block.y + 1][block.x] = '1';
            });

            field[ship[0].y][ship[0].x - 1] = '1';
            field[ship[0].y + 1][ship[0].x - 1] = '1';
            field[ship[ship.length-1].y][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          } else if (ship[0].y === field.length - 1) {
            ship.forEach(block => {
              field[block.y - 1][block.x] = '1';
            });

            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[0].y][ship[0].x - 1] = '1';
            field[ship[ship.length-1].y - 1][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y][ship[ship.length-1].x + 1] = '1';
          } else if (ship[0].x === 0) {
            ship.forEach(block => {
              field[block.y + 1][block.x] = '1';
              field[block.y - 1][block.x] = '1';
            });

            field[ship[ship.length-1].y - 1][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          } else if (ship[ship.length - 1].x === field.length - 1) {
            ship.forEach(block => {
              field[block.y + 1][block.x] = '1';
              field[block.y - 1][block.x] = '1';
            });

            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[0].y][ship[0].x - 1] = '1';
            field[ship[0].y + 1][ship[0].x - 1] = '1';
          } else {
            ship.forEach(block => {
              field[block.y + 1][block.x] = '1';
              field[block.y - 1][block.x] = '1';
            });

            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[0].y][ship[0].x - 1] = '1';
            field[ship[0].y + 1][ship[0].x - 1] = '1';
            field[ship[ship.length-1].y - 1][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y][ship[ship.length-1].x + 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          }
        } else {
          if (ship[0].x === 0 && ship[0].y === 0) {
            ship.forEach(block => {
              field[block.y][block.x + 1] = '1';
            });

            field[ship[ship.length-1].y + 1][ship[ship.length-1].x] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          } else if (ship[0].x === field.length - 1 && ship[0].y === 0) {
            ship.forEach(block => {
              field[block.y][block.x - 1] = '1';
            });

            field[ship[ship.length-1].y + 1][ship[ship.length-1].x] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x - 1] = '1';
          } else if (ship[ship.length - 1].x === field.length - 1 && ship[ship.length - 1].y === field.length - 1) {
            ship.forEach(block => {
              field[block.y][block.x - 1] = '1';
            });

            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[0].x - 1] = '1';
          } else if (ship[ship.length - 1].x === 0 && ship[ship.length - 1].y === field.length - 1) {
            ship.forEach(block => {
              field[block.y][block.x + 1] = '1';
            });

            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[0].x + 1] = '1';
          } else if (ship[0].y === 0) {
            ship.forEach(block => {
              field[block.y][block.x - 1] = '1';
              field[block.y][block.x + 1] = '1';
            });

            field[ship[ship.length-1].y + 1][ship[ship.length-1].x - 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          } else if (ship[ship.length - 1].y === field.length - 1) {
            ship.forEach(block => {
              field[block.y][block.x - 1] = '1';
              field[block.y][block.x + 1] = '1';
            });

            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[0].x + 1] = '1';
          } else if (ship[0].x === 0) {
            ship.forEach(block => {
              field[block.y][block.x + 1] = '1';
            });

            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[0].x + 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          } else if (ship[0].x === field.length - 1) {
            ship.forEach(block => {
              field[block.y][block.x - 1] = '1';
            });

            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x - 1] = '1';
          } else {
            ship.forEach(block => {
              field[block.y][block.x - 1] = '1';
              field[block.y][block.x + 1] = '1';
            });

            field[ship[0].y - 1][ship[0].x - 1] = '1';
            field[ship[0].y - 1][ship[0].x] = '1';
            field[ship[0].y - 1][ship[0].x + 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x - 1] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x] = '1';
            field[ship[ship.length-1].y + 1][ship[ship.length-1].x + 1] = '1';
          }
        }
      } else {
        if (ship[0].x === 0 && ship[0].y === 0) {
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].x === field.length - 1 && ship[0].y === 0) {
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
        } else if (ship[0].x === field.length - 1 && ship[0].y === field.length - 1) {
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x - 1] = '1';
        } else if (ship[0].x === 0 && ship[0].y === field.length - 1) {
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 0) {
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
        } else if (ship[0].y === field.length - 1) {
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
        } else if (ship[0].x === 0) {
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].x === field.length - 1) {
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
        } else {
          field[ship[0].y - 1][ship[0].x - 1] = '1';
          field[ship[0].y - 1][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x + 1] = '1';
          field[ship[0].y + 1][ship[0].x - 1] = '1';
          field[ship[0].y][ship[0].x - 1] = '1';
          field[ship[0].y][ship[0].x + 1] = '1';
          field[ship[0].y - 1][ship[0].x] = '1';
          field[ship[0].y + 1][ship[0].x] = '1';
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
    if (ship[0].x > 0) {
      ship.forEach(block => {
        block.x = block.x - 1;
      });
    }
  }

  stepUp(ship) {
    if (ship[0].y > 0) {
      ship.forEach(block => {
        block.y = block.y - 1;
      });
    }
  }

  stepDown(ship) {
    if (ship[ship.length - 1].y < this.field.length - 1) {
      ship.forEach(block => {
        block.y = block.y + 1;
      });
    }
  }

  stepRight(ship) {
    if (ship[ship.length - 1].x < this.field[0].length - 1) {
      ship.forEach(block => {
        block.x = block.x + 1;
      });
    }
  }

  rotate(ship) {
    if (ship.length > 1) {
      if (ship[0].y === ship[1].y) {
        for (let i = 0; i < ship.length; i++) {
          ship[i].x = ship[0].x;
          ship[i].y = ship[0].y + i;
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          ship[i].x = ship[0].x + i;
          ship[i].y = ship[0].y;
        }
      }

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
