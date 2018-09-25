class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    let $ul = $('ul');
    $ul.on("click", "li", e => {
      this.makeMove($(e.target));
    });
  }

  makeMove($square) {
    try {    
      this.game.playMove($square.data("pos"));
    } catch(err) {
      alert(err.msg);
    }
    $square.addClass(`${this.game.currentPlayer}`);
    $square.text(`${this.game.currentPlayer}`);
    if (this.game.winner()) {
      let $ul = $('ul');
      $ul.off();
      let $h1 = $(`<h1>Congratulations! ${this.game.currentPlayer} wins!</h1>`);
      let $body = $('body');
      $body.append($h1);
    }
  }

  setupBoard() {
    const $figure = $('figure');
    const $ul = $('<ul></ul>');
    
    $figure.append($ul);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $('<li></li>');
        $li.data("pos",[i,j]);
        $ul.append($li);
      }
    }
    
  }
}

module.exports = View;
