'use strict';

function main() {
  const level = new Level(10);
  const computerField = level.createField();
  const playerField = level.createField();

  const computer = new Computer(computerField);
  const cShip4 = computer.createShip(4);
  computer.placeShip(cShip4);

  const player = new Player(playerField);
  const pShip4 = player.createShip(4);
  player.placeShip(pShip4);

  let count = 1;
  player.getPlayerField().forEach(row => {
    let rowStr = count + '.) \t';
    row.forEach(char => {
      rowStr += char + '\t';
    });
    console.log(rowStr);
    count++;
  });

  const root = document.getElementById('root');
  root.innerHTML = level.displayField(computerField) + '<br/>' + level.displayField(playerField);
}
main();
