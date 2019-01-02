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

    if (isIntersect(this.field, ship)) {
      ship.forEach(block => {
        this.field[block.y][block.x] = '2';
      });

      if (ship.length > 1) {
        if (ship[0].y === ship[1].y) {
          if (ship[0].x === 0 && ship[0].y === 0) {
            this.field[ship[0].y + 1][ship[0].x] = '1';
            this.field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';
            this.field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
            this.field[ship[0].y][ship[ship.length - 1].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 0) {
            this.field[ship[0].y + 1][ship[0].x] = '1';
            this.field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
            this.field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';
            this.field[ship[0].y][ship[ship.length - 1].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 9) {
            this.field[ship[0].y - 1][ship[0].x] = '1';
            this.field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
            this.field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
            this.field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[0].y - 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 0 && ship[0].y === 9) {
            this.field[ship[0].y - 1][ship[0].x] = '1';
            this.field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
            this.field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
            this.field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[0].y - 1][ship[i].x] = '1';
            }
          } else if (ship[0].y === 0) {
            if (ship[0].x < ship[1].x) {
              this.field[ship[0].y + 1][ship[0].x] = '1';
              this.field[ship[0].y][ship[0].x - 1] = '1';
              this.field[ship[0].y + 1][ship[0].x - 1] = '1';
              this.field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
              this.field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
              this.field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                this.field[ship[0].y + 1][ship[i].x] = '1';
              }
            } else {
              this.field[ship[0].y + 1][ship[0].x] = '1';
              this.field[ship[0].y][ship[0].x + 1] = '1';
              this.field[ship[0].y + 1][ship[0].x + 1] = '1';
              this.field[ship[0].y + 1][ship[ship.length - 1].x] = '1';
              this.field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
              this.field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                this.field[ship[0].y + 1][ship[i].x] = '1';
              }
            }
          } else if (ship[0].y === 9) {
            if (ship[0].x < ship[1].x) {
              this.field[ship[0].y - 1][ship[0].x] = '1';
              this.field[ship[0].y][ship[0].x - 1] = '1';
              this.field[ship[0].y - 1][ship[0].x - 1] = '1';
              this.field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
              this.field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
              this.field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                this.field[ship[0].y - 1][ship[i].x] = '1';
              }
            } else {
              this.field[ship[0].y - 1][ship[0].x] = '1';
              this.field[ship[0].y][ship[0].x + 1] = '1';
              this.field[ship[0].y - 1][ship[0].x + 1] = '1';
              this.field[ship[0].y - 1][ship[ship.length - 1].x] = '1';
              this.field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
              this.field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';

              for (let i = 1; i < ship.length - 1; i++) {
                this.field[ship[0].y - 1][ship[i].x] = '1';
              }
            }
          } else if (ship[0].x === 0) {
            this.field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
            this.field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';
            this.field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              this.field[ship[0].y - 1][ship[i].x] = '1';
              this.field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else if (ship[0].x === 9) {
            this.field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
            this.field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';
            this.field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              this.field[ship[0].y - 1][ship[i].x] = '1';
              this.field[ship[0].y + 1][ship[i].x] = '1';
            }
          } else {
            if (ship[0].x < ship[1].x) {
              this.field[ship[0].y][ship[0].x - 1] = '1';
              this.field[ship[0].y - 1][ship[0].x - 1] = '1';
              this.field[ship[0].y + 1][ship[0].x - 1] = '1';
              this.field[ship[0].y][ship[ship.length - 1].x + 1] = '1';
              this.field[ship[0].y - 1][ship[ship.length - 1].x + 1] = '1';
              this.field[ship[0].y + 1][ship[ship.length - 1].x + 1] = '1';
            } else {
              this.field[ship[0].y][ship[0].x + 1] = '1';
              this.field[ship[0].y - 1][ship[0].x + 1] = '1';
              this.field[ship[0].y + 1][ship[0].x + 1] = '1';
              this.field[ship[0].y][ship[ship.length - 1].x - 1] = '1';
              this.field[ship[0].y - 1][ship[ship.length - 1].x - 1] = '1';
              this.field[ship[0].y + 1][ship[ship.length - 1].x - 1] = '1';
            }

            for (let i = 0; i < ship.length; i++) {
              this.field[ship[0].y - 1][ship[i].x] = '1';
              this.field[ship[0].y + 1][ship[i].x] = '1';
            }
          }
        }

        if (ship[0].x === ship[1].x) {
          if (ship[0].x === 0 && ship[0].y === 0) {
            this.field[ship[0].y][ship[0].x + 1] = '1';
            this.field[ship[ship.length - 1].y][ship[0].x + 1] = '1';
            this.field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
            this.field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[i].y][ship[0].x + 1] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 0) {
            this.field[ship[0].y][ship[0].x - 1] = '1';
            this.field[ship[ship.length - 1].y][ship[0].x - 1] = '1';
            this.field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
            this.field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].x === 9 && ship[0].y === 9) {
            this.field[ship[0].y][ship[0].x - 1] = '1';
            this.field[ship[ship.length - 1].y][ship[0].x - 1] = '1';
            this.field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
            this.field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].x === 0 && ship[0].y === 9) {
            this.field[ship[0].y][ship[0].x + 1] = '1';
            this.field[ship[ship.length - 1].y][ship[0].x + 1] = '1';
            this.field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
            this.field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

            for (let i = 1; i < ship.length - 1; i++) {
              this.field[ship[i].y][ship[0].x + 1] = '1';
            }
          } else if (ship[0].y === 0) {
            this.field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';
            this.field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
            this.field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              this.field[ship[i].y][ship[0].x + 1] = '1';
              this.field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].y === 9) {
            this.field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';
            this.field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
            this.field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

            for (let i = 0; i < ship.length; i++) {
              this.field[ship[i].y][ship[0].x + 1] = '1';
              this.field[ship[i].y][ship[0].x - 1] = '1';
            }
          } else if (ship[0].x === 0) {
            if (ship[0].y < ship[1].y) {
              this.field[ship[0].y - 1][ship[0].x] = '1';
              this.field[ship[0].y - 1][ship[0].x + 1] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                this.field[ship[i].y][ship[0].x + 1] = '1';
              }
            } else {
              this.field[ship[0].y + 1][ship[0].x] = '1';
              this.field[ship[0].y + 1][ship[0].x + 1] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                this.field[ship[i].y][ship[0].x + 1] = '1';
              }
            }
          } else if (ship[0].x === 9) {
            if (ship[0].y < ship[1].y) {
              this.field[ship[0].y - 1][ship[0].x] = '1';
              this.field[ship[0].y - 1][ship[0].x - 1] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                this.field[ship[i].y][ship[0].x - 1] = '1';
              }
            } else {
              this.field[ship[0].y + 1][ship[0].x] = '1';
              this.field[ship[0].y + 1][ship[0].x - 1] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                this.field[ship[i].y][ship[0].x - 1] = '1';
              }
            }
          } else {
            if (ship[0].y < ship[1].y) {
              this.field[ship[0].y - 1][ship[0].x - 1] = '1';
              this.field[ship[0].y - 1][ship[0].x] = '1';
              this.field[ship[0].y - 1][ship[0].x + 1] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x - 1] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x] = '1';
              this.field[ship[ship.length - 1].y + 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                this.field[ship[i].y][ship[0].x + 1] = '1';
                this.field[ship[i].y][ship[0].x - 1] = '1';
              }
            } else {
              this.field[ship[0].y + 1][ship[0].x - 1] = '1';
              this.field[ship[0].y + 1][ship[0].x] = '1';
              this.field[ship[0].y + 1][ship[0].x + 1] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x - 1] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x] = '1';
              this.field[ship[ship.length - 1].y - 1][ship[0].x + 1] = '1';

              for (let i = 0; i < ship.length; i++) {
                this.field[ship[i].y][ship[0].x + 1] = '1';
                this.field[ship[i].y][ship[0].x - 1] = '1';
              }
            }
          }
        }
      } else {
        if (ship[0].y === 0 && ship[0].x === 0) {
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 0 && ship[0].x === 9) {
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].y === 9 && ship[0].x === 9) {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
        } else if (ship[0].y === 9 && ship[0].x === 0) {
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
        } else if (ship[0].x === 0) {
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].x === 9) {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
        } else if (ship[0].y === 0) {
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
        } else if (ship[0].y === 9) {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
        } else {
          this.field[ship[0].y - 1][ship[0].x - 1] = '1';
          this.field[ship[0].y - 1][ship[0].x] = '1';
          this.field[ship[0].y - 1][ship[0].x + 1] = '1';
          this.field[ship[0].y][ship[0].x - 1] = '1';
          this.field[ship[0].y][ship[0].x + 1] = '1';
          this.field[ship[0].y + 1][ship[0].x - 1] = '1';
          this.field[ship[0].y + 1][ship[0].x] = '1';
          this.field[ship[0].y + 1][ship[0].x + 1] = '1';
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

  stepLeft(ship) {
    console.log('Step to left!');
  }

  stepUp(ship) {
    console.log('Step to up!');
  }

  stepDown(ship) {
    console.log('Step to down!');
  }

  stepRight(ship) {
    console.log('Step to right!');
  }

  rotate(ship) {
    if (ship.length > 1) {
      ship.forEach(block => {
        let z = 0;
        z = block.x;
        block.x = block.y;
        block.y = z;
      });
    }
  }

  setShip(ship) {
    console.log('Ship is seted!');
  }
}
