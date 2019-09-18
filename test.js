const columns = document.querySelectorAll(".col");
const diskOne = document.getElementById("disk-1");
const diskTwo = document.getElementById("disk-2");
const diskThree = document.getElementById("disk-3");
let targetDisk;

// diskOne.addEventListener("dragstart", dragStart);
// diskTwo.addEventListener("dragstart", dragStart);
// diskThree.addEventListener("dragstart", dragStart);
function dragStart(evt) {
  console.log(evt);
  targetDisk = evt.target;
  console.log(targetDisk);
  console.log(evt.path[1].children[1]);
  //   diskTwo.setAttribute("draggable", true);
}
function dragEnd(evt) {
  //   console.log(evt.path[1].children[1]);
}

// Loop through columns and add "drop" event listeners"
for (const col of columns) {
  col.addEventListener("dragstart", dragStart);
  col.addEventListener("dragend", dragEnd);
  col.addEventListener("dragover", dragOver);
  col.addEventListener("dragenter", dragEnter);
  col.addEventListener("dragleave", dragLeave);
  col.addEventListener("drop", dragDrop);
}

function dragOver(evt) {
  evt.preventDefault();
  console.log("Over");
}

function dragEnter(evt) {
  evt.preventDefault();
  console.log("Enter");
}

function dragLeave() {
  console.log("leave");
}
function dragDrop(evt) {
  console.log(evt);
  this.insertBefore(targetDisk, this.children[0]);

  // if evt contains no disks, then
}
