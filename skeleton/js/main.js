const View = require("./ttt-view.js");
const Game = require("../../solution/game.js");

$( () => {
  // Your code hereg
  let game = new Game();
  let $ttt = $('.ttt');
  let view = new View(game,$ttt);
  view.setupBoard();
  view.bindEvents();
});
