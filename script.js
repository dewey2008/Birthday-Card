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
  setInterval(() => {
    let balloonCount = Math.floor(Math.random() * 2) + 1; 
    for (let i = 0; i < balloonCount; i++) {
      createBalloon();
    }
  }, 4000); // Increased the interval to 4000ms (4 seconds)
};


// Gift click event
gift.onclick = () => {
  addGiftWobble();

  setTimeout(() => {
    removeGiftWobble();
    addGiftOpen();
    addCardZoomIn();

    setTimeout(() => {
      showSurpriseBox();
      showBalloons();
    }, 1000);

  }, 3000);
};

envelope.onclick = () => {
  openEnvelope();
};

function createBalloon() {
  const balloonWrapper = document.createElement("div");
  balloonWrapper.classList.add("balloon-wrapper");

  const balloon = document.createElement("img");
  balloon.classList.add("balloon");

  const balloonImages = [
    "./image/green_balloon.png",
    "./image/pink_balloon.png",
    "./image/yellow_balloon.png"
  ];

  const randomImage = balloonImages[Math.floor(Math.random() * balloonImages.length)];
  balloon.src = randomImage;

  const leftPosition = Math.floor(Math.random() * window.innerWidth) - 50;
  balloonWrapper.style.left = `${leftPosition}px`;

  balloonWrapper.appendChild(balloon);

  // Make balloon pop on click
  balloon.addEventListener("click", (e) => {
    e.stopPropagation();
    balloonWrapper.classList.add('pop');
    setTimeout(() => {
      balloonWrapper.remove();
    }, 300);
  });

  document.getElementById("balloons").appendChild(balloonWrapper);

  setTimeout(() => {
    if (balloonWrapper.parentElement) {
      balloonWrapper.remove();
    }
  }, 10000);
}
