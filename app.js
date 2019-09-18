// Disk variable
let disk;
let diskOne;
let diskTwo;
let diskThree;

// startGame function with first click
const getDisk = function(evt) {
  disk = evt.target;
  console.log(evt.path[2].children[2]);
  disk.style.border = "2px solid black";
  //   colOne.removeEventListener("click", getDisk);
  colTwo.addEventListener("click", setDisk);
  colThree.addEventListener("click", setDisk);
};

// Grab the three columns
let colOne = document.getElementById("col-1");
let colTwo = document.getElementById("col-2");
let colThree = document.getElementById("col-3");
// Add event listeners to the columns
colOne.addEventListener("click", getDisk);

// setDisk function
const setDisk = function(evt) {
  //   disk = evt.target;
  disk.style.border = "none";
  evt.target.appendChild(disk);
  colOne.addEventListener("click", getDisk);
  colTwo.addEventListener("click", getDisk);
  colThree.addEventListener("click", getDisk);
};

// const getDisk = function(evt) {

// };
