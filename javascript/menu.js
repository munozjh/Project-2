const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");
const menuCount = document.getElementById("menu-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 1. Actualizar el botón activo visualmente
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // 2. Leer la categoría elegida desde el atributo data-filter
    const selectedCategory = button.getAttribute("data-filter");
    let visibleItems = 0;

    // 3. Mostrar u ocultar cada tarjeta según su data-category
    menuCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.classList.remove("hidden");
        visibleItems++;
      } else {
        card.classList.add("hidden");
      }
    });

    // 4. Actualizar el contador de productos mostrados
    if (selectedCategory === "all") {
      menuCount.textContent = `Showing all ${visibleItems} items`;
    } else {
      menuCount.textContent = `Showing ${visibleItems} ${visibleItems === 1 ? "item" : "items"}`;
    }
  });
});