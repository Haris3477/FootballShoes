// Get references to the dropdowns and shoe cards
const genderFilter = document.getElementById("genderFilter");
const sizeFilter = document.getElementById("sizeFilter");
const shoeCards = document.querySelectorAll(".shoe-card");

// Listen for changes on both dropdowns
genderFilter.addEventListener("change", filterShoes);
sizeFilter.addEventListener("change", filterShoes);

function filterShoes() {
  const selectedGender = genderFilter.value;
  const selectedSize = sizeFilter.value;

  shoeCards.forEach((card) => {
    const shoeGender = card.getAttribute("data-gender");
    const shoeSize = card.getAttribute("data-size");

    // Check if this shoe matches the selected filters
    const matchesGender = selectedGender === "all" || shoeGender === selectedGender;
    const matchesSize = selectedSize === "all" || shoeSize === selectedSize;

    if (matchesGender && matchesSize) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
