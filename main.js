var Direction = {
  IDLE: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};

var rounds = [5, 5, 3, 3, 2];
var colors = ["#1abc9c", "#2ecc71", "#3498db", "#8c52ff", "#9b59b6"];

var Ball = {
  new: function (incrementedSpeed) {
    return {
      width: 18,
      height: 18,
      x: (this.canvas.width/2) - 9,
      y: (this.canvas.height/2) - 9,
      moveX: Direction.IDLE,
      moveY: Direction.IDLE,
      speed: incrementedSpeed || 7
    };
  },
};
