// Create variables
const columns = document.querySelectorAll(".col");
const diskOne = document.getElementById("disk-1");
const diskTwo = document.getElementById("disk-2");
const diskThree = document.getElementById("disk-3");
//create an array of disks
let diskArray = [];
// const diskArray = [diskOne, diskTwo, diskThree];

const levelDisplay = document.querySelector(".disk-level");
const movesDisplay = document.querySelector(".moves");
const restartBtn = document.getElementById("restart");
const nextBtn = document.getElementById("next");
let targetDisk;
// let diskCount = 3;
let moveCounter = 0;
let winCounter = 0;

// Add event listeners to next and restart
restartBtn.addEventListener("click", restartGame);
nextBtn.addEventListener("click", nextLevel);

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
  if (evt.path[1].childElementCount === diskArray.length) {
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
  // Fill the diskArray
  diskArray = document.querySelectorAll(".disk");
  levelDisplay.innerText = `Disks: ${diskArray.length}`;

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

// Function to restart the game
function restartGame() {
  // Reset the moves count
  resetMoveCtr();

  // Put the disks back into the first column
  for (let disk of diskArray) {
    columns[0].append(disk);
  }
}

// Function to move to next level
function nextLevel() {
  let newDisk = document.createElement("div");
  newDisk.classList.add("disk");
  newDisk.classList.add("d-4");
  columns[0].append(newDisk);

  gameStart();
}

function incrementMoveCtr() {
  moveCounter += 1;
  movesDisplay.innerText = `Moves: ${moveCounter}`;
}

function resetMoveCtr() {
  moveCounter = 0;
  movesDisplay.innerText = `Moves: ${moveCounter}`;
}

// Start the game
gameStart();
