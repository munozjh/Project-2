const filterButtons = document.querySelectorAll(".filter-btn");
const galleryCards = document.querySelectorAll(".gallery-card");
const galleryCount = document.getElementById("gallery-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.getAttribute("data-filter");
    let visiblePhotos = 0;

    galleryCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.classList.remove("hidden");
        visiblePhotos++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (selectedCategory === "all") {
      galleryCount.textContent = `Showing all ${visiblePhotos} photos`;
    } else {
      galleryCount.textContent = `Showing ${visiblePhotos} ${visiblePhotos === 1 ? "photo" : "photos"}`;
    }
  });
});