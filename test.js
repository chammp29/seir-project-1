const columns = document.querySelectorAll(".col");
// const diskOne = document.getElementById("disk-1");
// const diskTwo = document.getElementById("disk-2");
// const diskThree = document.getElementById("disk-3");
let targetDisk;

// Loop through columns and add "drop" event listeners"
for (const col of columns) {
  col.addEventListener("dragstart", dragStart);
  col.addEventListener("dragend", dragEnd);
  col.addEventListener("dragover", dragOver);
  col.addEventListener("dragenter", dragEnter);
  col.addEventListener("dragleave", dragLeave);
  col.addEventListener("drop", dragDrop);
}

function dragStart(evt) {
  console.log(evt);
  targetDisk = evt.target;
  console.log(targetDisk);
  console.log(evt.path[1].children[1]);
  //   diskTwo.setAttribute("draggable", true);
}
function dragEnd(evt) {
  // the dragend event is happening after the drop event, and the target is the disk
  console.log(evt);
  console.log("1");
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
  // the drop event is happening before the dragend event, and the target is the new column
  console.log(evt);
  console.log("2");

  // test out compare function
  if (evt.path[0].childElementCount > 0) {
    if (compare(this.children)) {
      this.insertBefore(targetDisk, this.children[0]);
    } else {
      console.log("sorry");
    }
  } else {
    this.insertBefore(targetDisk, this.children[0]);
  }
}

function compare(childrenArray) {
  if (targetDisk.clientWidth < childrenArray[0].clientWidth) {
    return true;
  } else {
    return false;
  }
  //   for (let kids of childrenArray) {
  //     let kidsWidth = kids.clientWidth;
  //     console.log(kidsWidth);
  //   }
}
