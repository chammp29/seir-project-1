// This was a rough sketch of how I would solve this problem using a game object. I decided to start simpler than this and never was able to revisit this idea in the project timeframe

const game = {
  diskOne: document.getElementById("disk-1"),
  diskTwo: document.getElementById("disk-2"),
  diskThree: document.getElementById("disk-3"),
  colOne: document.getElementById("col-1"),
  colTwo: document.getElementById("col-2"),
  colThree: document.getElementById("col-3"),
  colOneArr: [],
  colTwoArr: [],
  colThreeArr: [],
  moveDisk: function(disk) {
    colTwoArr.pop(disk);
  }
};

game.moveDisk();
