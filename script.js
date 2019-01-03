'use strict';

function main() {
  const level = new Level(10);

  const playerField = level.createField();
  const player = new Player(playerField);
  // const pShip4 = player.createShip(4);
  const ships = [player.createShip(4), player.createShip(3), player.createShip(2), player.createShip(1)];

  moveAndSetPLayerShips(player, ships);

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

function moveAndSetPLayerShips(player, ships) {
  let index = 0;
  let playerShip = ships[index];

  player.placeShip(playerShip, player.fieldMirror);
  showFieldInConsole(player.getPlayerField());
  console.log('');
  showFieldInConsole(player.getPlayerFieldMirror());

  document.getElementById('rotate').addEventListener('click', event => {
    player.rotate(playerShip);
    player.clearMirror();
    player.placeShip(playerShip, player.fieldMirror);
    console.clear();
    showFieldInConsole(player.getPlayerField());
    console.log('');
    showFieldInConsole(player.getPlayerFieldMirror());
  });
  document.getElementById('right').addEventListener('click', event => {
    player.stepRight(playerShip);
    player.clearMirror();
    player.placeShip(playerShip, player.fieldMirror);
    console.clear();
    showFieldInConsole(player.getPlayerField());
    console.log('');
    showFieldInConsole(player.getPlayerFieldMirror());
  });
  document.getElementById('down').addEventListener('click', event => {
    player.stepDown(playerShip);
    player.clearMirror();
    player.placeShip(playerShip, player.fieldMirror);
    console.clear();
    showFieldInConsole(player.getPlayerField());
    console.log('');
    showFieldInConsole(player.getPlayerFieldMirror());
  });
  document.getElementById('left').addEventListener('click', event => {
    player.stepLeft(playerShip);
    player.clearMirror();
    player.placeShip(playerShip, player.fieldMirror);
    console.clear();
    showFieldInConsole(player.getPlayerField());
    console.log('');
    showFieldInConsole(player.getPlayerFieldMirror());
  });
  document.getElementById('up').addEventListener('click', event => {
    player.stepUp(playerShip);
    player.clearMirror();
    player.placeShip(playerShip, player.fieldMirror);
    console.clear();
    showFieldInConsole(player.getPlayerField());
    console.log('');
    showFieldInConsole(player.getPlayerFieldMirror());
  });
  document.getElementById('set').addEventListener('click', event => {
    if (player.setShip(playerShip)) {
      player.clearMirror();
      console.clear();
      showFieldInConsole(player.getPlayerField());
      console.log('');
      showFieldInConsole(player.getPlayerFieldMirror());

      index++;
      if (ships.length > index) {
        playerShip = ships[index];
      } else {
        index = 0;
      }
    }
  });
}
