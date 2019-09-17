// Disk variable
let diskOne;
let diskTwo;
let diskThree;

// getDisk function
const getDisk = function(evt) {
  diskOne = evt.target;
  console.log(diskOne);
  diskOne.style.border = "2px solid black";
  colOne.removeEventListener("click", getDisk);
  colTwo.addEventListener("click", setDisk);
};

// Grab the three columns
let colOne = document.getElementById("col-1");
let colTwo = document.getElementById("col-2");
let colThree = document.getElementById("col-3");
// Add event listeners to the columns
colOne.addEventListener("click", getDisk);

// setDisk function
const setDisk = function(evt) {
  diskOne.style.border = "none";
  colTwo.appendChild(diskOne);
  colOne.addEventListener("click", getDisk);
};
