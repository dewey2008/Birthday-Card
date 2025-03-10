let gift = document.querySelector('.gift');
let giftCover = document.querySelector('.gift__cover');
let giftContainer = document.querySelector('.gift__container');
let card = document.querySelector('.card');
let surpriseBox = document.getElementById('surpriseBox');
let envelope = document.querySelector('.envelope');
let giftLabel = document.querySelector('.gift__container__label'); // Select the label
let balloonContainer = document.getElementById('balloons'); // Corrected the balloon container reference

// Step 1: Add wobble animation to the gift
let addGiftWobble = () => {
  gift.classList.add('animate__wobble');
  giftCover.classList.add('animate__wobble');
};

// Step 2: Remove wobble animation after a delay
let removeGiftWobble = () => {
  gift.classList.remove('animate__wobble');
  giftCover.classList.remove('animate__wobble');
};

// Step 3: Open the gift and animate the cover and container
let addGiftOpen = () => {
  giftCover.classList.add('animate__open');
  giftContainer.classList.add('animate__open');
};

// Step 4: Animate the card's zoom-in effect and hide the "Click Me!" label
let addCardZoomIn = () => {
  card.classList.add('animate');
  giftLabel.style.display = "none"; // Hide the "Click Me!" label
};

// Step 5: Show the surprise box with animation
let showSurpriseBox = () => {
  surpriseBox.style.display = "block";
  surpriseBox.classList.add('animate');
};

// Step 6: Open the envelope and reveal the ticket
let openEnvelope = () => {
  envelope.classList.toggle('open');
};

// Step 7: Trigger continuous balloon animations
let showBalloons = () => {
  balloonContainer.style.display = 'block'; // Make the balloon container visible
  // Generate balloons every 2000 milliseconds (2 seconds)
  setInterval(() => {
    // Generate between 1 and 2 balloons instead of up to 5
    let balloonCount = Math.floor(Math.random() * 2) + 1; 
    for (let i = 0; i < balloonCount; i++) {
      createBalloon();
    }
  }, 2000);
};


// Gift click event
gift.onclick = () => {
  addGiftWobble();

  setTimeout(() => {
    removeGiftWobble();

    addGiftOpen();
    addCardZoomIn(); // Hides "Click Me!" when card appears

    setTimeout(() => {
      showSurpriseBox();
      showBalloons(); // Show balloons continuously when the gift opens

    }, 1000);

  }, 3000);
};

// Envelope click event
envelope.onclick = () => {
  openEnvelope();
};

function createBalloon() {
  const balloonWrapper = document.createElement("div");
  balloonWrapper.classList.add("balloon-wrapper");

  const balloon = document.createElement("img");
  balloon.classList.add("balloon");

  // Array of the three balloon images
  const balloonImages = [
    "./image/green_balloon.png",  // Replace with the actual path of the first balloon image
    "./image/pink_balloon.png",     // Replace with the actual path of the second balloon image
    "./image/yellow_balloon.png"    // Replace with the actual path of the third balloon image
  ];

  // Randomly select an image from the array
  const randomImage = balloonImages[Math.floor(Math.random() * balloonImages.length)];

  // Set the source of the balloon image
  balloon.src = randomImage;

  // Set random horizontal position for the balloon
  const leftPosition = Math.floor(Math.random() * window.innerWidth) - 50;
  balloonWrapper.style.left = `${leftPosition}px`;

  // Append the balloon image to the wrapper
  balloonWrapper.appendChild(balloon);

  // Add the balloon wrapper to the DOM
  document.getElementById("balloons").appendChild(balloonWrapper);

  // Remove the balloon wrapper after animation completes
  setTimeout(() => {
    balloonWrapper.remove();
  }, 10000); // This duration should match the float animation
}


function createBalloon() {
  const balloonWrapper = document.createElement("div");
  balloonWrapper.classList.add("balloon-wrapper");

  const balloon = document.createElement("img");
  balloon.classList.add("balloon");

  // Array of the three balloon images
  const balloonImages = [
    "./image/green_balloon.png",  // Replace with your actual path
    "./image/pink_balloon.png",     // Replace with your actual path
    "./image/yellow_balloon.png"    // Replace with your actual path
  ];

  // Randomly select an image from the array
  const randomImage = balloonImages[Math.floor(Math.random() * balloonImages.length)];
  balloon.src = randomImage;

  // Set random horizontal position for the balloon
  const leftPosition = Math.floor(Math.random() * window.innerWidth) - 50;
  balloonWrapper.style.left = `${leftPosition}px`;

  // Append the balloon image to the wrapper
  balloonWrapper.appendChild(balloon);

  // Add click event listener to make the balloon pop when clicked
  balloon.addEventListener("click", (e) => {
    // Prevent the click from triggering any parent events
    e.stopPropagation();
    // Add the pop animation class
    balloonWrapper.classList.add('pop');
    // Remove the balloon after the pop animation completes (300ms)
    setTimeout(() => {
      balloonWrapper.remove();
    }, 300);
  });

  // Add the balloon wrapper to the DOM
  document.getElementById("balloons").appendChild(balloonWrapper);

  // Remove the balloon wrapper after its normal animation completes (if not popped)
  setTimeout(() => {
    if (balloonWrapper.parentElement) {
      balloonWrapper.remove();
    }
  }, 10000); // This duration should match your float animation
}


// Dewey 2025 //