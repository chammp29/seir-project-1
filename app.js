// Create variables
let targetDisk;
let diskCount = 3;
let moveCounter = 0;
const columns = document.querySelectorAll(".col");
const levelDisplay = document.querySelector(".disk-level");
const movesDisplay = document.querySelector("#moves");
const restartBtn = document.getElementById("restart");
const decreaseBtn = document.getElementById("level-decrease");
const increaseBtn = document.getElementById("level-increase");

//create an empty array for the disks
let diskArray = [];

// Add event listeners to increase, decrease, and restart buttons
restartBtn.addEventListener("click", restartGame);
decreaseBtn.addEventListener("click", decreaseLevel);
increaseBtn.addEventListener("click", increaseLevel);

// Modal: Game Win - data structures
const gameModal = document.getElementById("win-game-modal");
const closeGameModal = document.getElementById("close-game-modal");
let userMoves = document.getElementById("user-moves");
let minMoves = document.getElementById("min-moves");
let nextLevel = document.getElementById("next-level");

// Add event listener to closeGameModal button
closeGameModal.addEventListener("click", closeWinGame);

// Function to close the Game Win modal
function closeWinGame() {
  gameModal.style.display = "none";
}

// ***DRAG FUNCTIONS*** //

// on dragStart, set the targetDisk to the event target
function dragStart(evt) {
  targetDisk = evt.target;
}

function dragLeave() {} // I was going to add code here to change styling as the disk left a column

// necessary to prevent default behavior
function dragOver(evt) {
  evt.preventDefault();
}

// necessary to prevent default behavior
function dragEnter(evt) {
  evt.preventDefault();
}

// the dragend event is happening after the drop event, and the target is the disk
function dragEnd(evt) {
  // on dragend, check if win condition is met
  checkWin(evt);
}

// the drop event is happening before the dragend event, and the target is the new column
function dragDrop(evt) {
  // if the column has another disk in it, then run the compare function; place the disk if appropriate
  if (evt.path[0].childElementCount > 0) {
    // run compare function on "this" (new column)'s children and compare sizes, as long as targetDisk is smaller than children, place on top
    if (compare(this.children)) {
      this.insertBefore(targetDisk, this.children[0]);
      // Successful move, increment move counter
      incrementMoveCtr();
    } else {
      // alert user that you can't put a large disk on top of small disk
      alert("You can't put a larger disk on top of a smaller disk.");
    }
  } else {
    // if there are no "children" then place the targetDisk
    this.insertBefore(targetDisk, this.children[0]);
    // Successful move, increment move counter
    incrementMoveCtr();
  }
}
// ***END DRAG FUNCTIONS*** //

// Function to set a disk draggable as long as it's the smallest disk in the column
function setDraggable(evt) {
  // if evt (disk) has a previousSibling...
  if (evt.target.previousElementSibling !== null) {
    // then compare sizes
    if (
      evt.path[0].clientWidth > evt.path[0].previousElementSibling.clientWidth
    ) {
      // make sure "this" is not draggable
      this.setAttribute("draggable", false);
    }
  } else {
    // allow "this" to be draggable
    this.setAttribute("draggable", true);
  }
}

// Compare sizes of disks to prevent a larger disk from being placed on a smaller disk; returns true if the targetDisk is smaller than another disk in the column
function compare(childrenArray) {
  // if targetDisk is smaller than the top "child" disk in the column, then return true
  if (targetDisk.clientWidth < childrenArray[0].clientWidth) {
    return true;
  } else {
    return false;
  }
}

// Function to check for a win
function checkWin(evt) {
  // called from dragend, if the targetDisk's column contains a child amount equal to the amount of disks in play, then win, call playAgain and restart the game
  if (evt.path[1].childElementCount === diskArray.length) {
    // display game win modal
    playAgain();
    // restart the game
    restartGame();
  }
}

// Function to display game win modal and move to next level
function playAgain() {
  // display how many moves the user used to beat the last level
  userMoves.innerText = moveCounter;
  // call the increaseLevel() to increase the number of disks
  increaseLevel();
  // display the new information in the game win modal
  nextLevel.innerText = diskCount;
  gameModal.style.display = "block";
}

// Function to start the game and add all current event listeners
function gameStart() {
  // Fill the diskArray with appropriate disks
  diskArray = document.querySelectorAll(".disk");
  // Adjust disk count display
  levelDisplay.innerText = `Disks: ${diskArray.length}`;

  // Loop through diskArray and add event listener for mousedown, sets the target to draggable
  for (disk of diskArray) {
    disk.addEventListener("mousedown", setDraggable);
  }

  // Loop through columns and add event listeners for drag events
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

// Function to increase disk count
function increaseLevel() {
  // make sure decreaseBtn is enabled
  decreaseBtn.removeAttribute("disabled");
  // make sure that the user isn't able to increase disk count past 5
  if (diskCount < 5) {
    restartGame();
    diskCount += 1;

    // create a new div, give it a class of "disk" and "d-(diskCount)"
    let newDisk = document.createElement("div");
    newDisk.classList.add("disk");
    newDisk.classList.add(`d-${diskCount}`);
    // append the new div to the first column
    columns[0].append(newDisk);

    // start the game
    gameStart();
  } else {
    // if diskCount is 5, disable button so that it can't be increased anymore
    increaseBtn.setAttribute("disabled", true);
  }
}

// Function to decrease disk count
function decreaseLevel() {
  // make sure increaseBtn is enabled
  increaseBtn.removeAttribute("disabled");
  if (diskCount > 3) {
    restartGame();
    diskCount -= 1;
    // remove the last child (disk) in the column
    columns[0].removeChild(columns[0].lastChild);
    gameStart();
  } else {
    // if diskCount is less than 3 then disable the button so it can't go below 3
    decreaseBtn.setAttribute("disabled", true);
  }
}

// Function to increment the move counter on each successful move
function incrementMoveCtr() {
  moveCounter += 1;
  movesDisplay.innerText = `Moves: ${moveCounter}`;
}

// Function to reset the move counter
function resetMoveCtr() {
  moveCounter = 0;
  movesDisplay.innerText = `Moves: ${moveCounter}`;
}

// Start the game
gameStart();
