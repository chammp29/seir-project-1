// Grabbing About the Game button
const openBtn = document.getElementById("openModal");

// Grabbing modal element
const modal = document.getElementById("modal");

// Grabbing close button
const close = document.getElementById("close");

// Function to change modal display to 'block'
const openModal = () => {
  modal.style.display = "block";
};

// Event handler to close the modal
const closeModal = () => {
  modal.style.display = "none";
};

//Add event listener to About the Game button
openBtn.addEventListener("click", openModal);

//Add event listener to Close button
close.addEventListener("click", closeModal);

// Automaticaly popup modal after 2 seconds of page load
// setTimeout(openModal, 2000);
