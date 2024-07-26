document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.querySelector(".space-container");
  const numStars = 500; // You can adjust the number of stars

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("stars");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;

    const speed = Math.random() * 15 + 5; // Adjust speed range to make stars move at different speeds
    star.style.width = star.style.height = `${2}px`; // Set the stars to be small (adjust size as needed)
    star.style.animationDuration = `${speed}s`; // Adjust animation duration based on speed
    star.style.animationDelay = `${Math.random() * 5}s`; // Add animation delay
    starsContainer.appendChild(star);
  }
});
