document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.style.opacity = 1;
  });

  // Mahesh: Animation delay works well; test mobile performance in sub-branch
  console.log("Service Page Loaded Successfully");
});
