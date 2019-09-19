// Grabbing About the Game button
const openBtn = document.getElementById("open-about-modal");

// Grabbing modal element
const aboutModal = document.getElementById("about-modal");

// Grabbing close button
const closeAboutModal = document.getElementById("close-about-modal");

// Function to change modal display to 'block'
const openAboutModal = () => {
  aboutModal.style.display = "block";
};

// Event handler to close the modal
const closeModal = () => {
  aboutModal.style.display = "none";
};

//Add event listener to About the Game button
openBtn.addEventListener("click", openAboutModal);

//Add event listener to Close button
closeAboutModal.addEventListener("click", closeModal);

// Automaticaly popup modal after 2 seconds of page load
// setTimeout(openModal, 2000);
