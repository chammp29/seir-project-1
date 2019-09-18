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
