// Create variables
const columns = document.querySelectorAll(".col");
const diskOne = document.getElementById("disk-1");
const diskTwo = document.getElementById("disk-2");
const diskThree = document.getElementById("disk-3");
const diskArray = [diskOne, diskTwo, diskThree];
let targetDisk;
let moveCounter = 0;
let winCounter = 0;

function setDraggable(evt) {
  // testing evt
  //   console.log(evt);
  //   console.log(evt.path[0].clientWidth);

  // if evt has a previousSibling, then compare sizes
  if (evt.target.previousElementSibling !== null) {
    if (
      evt.path[0].clientWidth > evt.path[0].previousElementSibling.clientWidth
    ) {
      // set this to non-draggable
      this.setAttribute("draggable", false);
    }
  } else {
    // set to draggable
    this.setAttribute("draggable", true);
  }
}

// DRAG FUNCTIONS

// on dragStart, set the targetDisk to the event target
function dragStart(evt) {
  //   console.log(evt);
  targetDisk = evt.target;
  //   console.log(targetDisk);
}

function dragEnd(evt) {
  // the dragend event is happening after the drop event, and the target is the disk
  //   console.log(evt);
  checkWin(evt);
}

function dragOver(evt) {
  evt.preventDefault();
}

function dragEnter(evt) {
  evt.preventDefault();
}

function dragLeave() {}

function dragDrop(evt) {
  // the drop event is happening before the dragend event, and the target is the new column
  //   console.log(evt);

  // if the column has another disk in it, then run the compare function; place the disk if appropriate
  if (evt.path[0].childElementCount > 0) {
    if (compare(this.children)) {
      this.insertBefore(targetDisk, this.children[0]);

      // Increment move counter
      incrementMoveCtr();
    } else {
      alert("You can't put a larger disk on top of a smaller disk.");
    }
  } else {
    this.insertBefore(targetDisk, this.children[0]);

    // Increment move counter
    incrementMoveCtr();
  }
}

// Compare sizes of disks to prevent a larger disk from being placed on a smaller disk; returns true is the targetDisk is smaller than another disk in the column
function compare(childrenArray) {
  if (targetDisk.clientWidth < childrenArray[0].clientWidth) {
    return true;
  } else {
    return false;
  }
}

// Check for a win
function checkWin(evt) {
  if (evt.path[1].childElementCount === 3) {
    setNonDraggable();
    playAgain();
    resetMoveCtr();
  }
}

function setNonDraggable() {
  for (disk of diskArray) {
    disk.removeEventListener("mousedown", setDraggable);
  }
  diskOne.setAttribute("draggable", false);
  diskTwo.setAttribute("draggable", false);
  diskThree.setAttribute("draggable", false);
}

function playAgain() {
  let userAction = prompt(
    "You've won the game! Would you like to play again?",
    "Yes or No?"
  );

  if (userAction === "yes") {
    gameStart();
    alert("Great! Now try going the opposite direction!");
  } else {
    alert("Goodbye");
  }
}

function gameStart() {
  // Loop through diskArray and add event listener
  for (disk of diskArray) {
    disk.addEventListener("mousedown", setDraggable);
  }
  // Loop through columns and add event listeners
  for (const col of columns) {
    col.addEventListener("dragstart", dragStart);
    col.addEventListener("dragend", dragEnd);
    col.addEventListener("dragover", dragOver);
    col.addEventListener("dragenter", dragEnter);
    col.addEventListener("dragleave", dragLeave);
    col.addEventListener("drop", dragDrop);
  }
}

function incrementMoveCtr() {
  moveCounter += 1;
  console.log(moveCounter);
}

function resetMoveCtr() {
  moveCounter = 0;
}

// Start the game
gameStart();
