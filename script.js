'use strict';

function main() {
  const level = new Level(10);
  const field = level.createField();

  const computer = new Computer(field);
  const cShip4 = computer.createShip(4);
  computer.placeShip(cShip4);

  let count = 1;
  computer.getComputerField().forEach(row => {
    let rowStr = count + '.) \t';
    row.forEach(char => {
      rowStr += char + '\t';
    });
    console.log(rowStr);
    count++;
  });

  const player = new Player(field);
  const pShip4 = player.createShip(4);
  player.placeShip(pShip4);

  const root = document.getElementById('root');
  root.innerHTML = level.displayField(field);
}
main();
