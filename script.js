'use strict';

function main() {
  const level = new Level(10);

  const playerField = level.createField();
  const player = new Player(playerField);
  const pShip4 = player.createShip(4);
  player.placeShip(pShip4, player.fieldMirror);
  showFieldInConsole(player.getPlayerFieldMirror());

  document.getElementById('rotate').addEventListener('click', event => {
    player.rotate(pShip4);
    player.clearMirror();
    player.placeShip(pShip4, player.fieldMirror);
    console.clear();
    showFieldInConsole(player.getPlayerFieldMirror());
  });

  const root = document.getElementById('root');
  root.innerHTML = level.displayField('Hi!');
}
main();

function showFieldInConsole(field) {
  let count = 1;
  field.forEach(row => {
    let rowStr = count + '.) \t';
    row.forEach(char => {
      rowStr += char + '\t';
    });
    console.log(rowStr);
    count++;
  });
}
