class HanoiView {
  constructor(HanoiGame,dom){
    this.HanoiGame = HanoiGame;
    this.dom = dom;
  }
  
  setupTowers() {
    let $body = $('body');
    
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul></ul>');
      $ul.data("num", i);
      $body.append($ul);
    }
    
    for (let i = 2; i >= 0; i--) {
      let $li = $('<li></li>');
      $li.data("size", i);
      $ul.append($li);
    }
  }
}

















module.exports = HanoiView;