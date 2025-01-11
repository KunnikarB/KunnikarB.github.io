  // script.js

// Array of 10 must-try Thai foods
const thaiFoods = [
  { name: "Pad Thai", description: "A stir-fried noodle dish with tamarind, shrimp, tofu, and peanuts." },
  { name: "Tom Yum Goong", description: "A hot and sour soup with shrimp, lemongrass, and lime leaves." },
  { name: "Green Curry", description: "A creamy, spicy curry made with green chili paste, coconut milk, and chicken." },
  { name: "Som Tum", description: "A refreshing green papaya salad with a tangy lime dressing." },
  { name: "Massaman Curry", description: "A mild, rich curry with potatoes, peanuts, and a unique blend of spices." },
  { name: "Mango Sticky Rice", description: "A sweet dessert made of sticky rice, fresh mango, and coconut cream." },
  { name: "Satay", description: "Grilled meat skewers served with a rich peanut sauce." },
  { name: "Pad Krapow Moo Saap", description: "A spicy stir-fried pork dish with holy basil and chilies." },
  { name: "Khao Soi", description: "A Northern Thai noodle dish in a fragrant coconut curry broth." },
  { name: "Spring Rolls", description: "Crispy rolls filled with vegetables, glass noodles, and sometimes meat." },
];

// Function to load Thai foods dynamically
function loadThaiFoods(filter = "") {
  const contentSection = document.getElementById("thai-foods-content");
  contentSection.innerHTML = ""; // Clear the content area

  // Filter foods based on the search
  const filteredFoods = thaiFoods.filter(food =>
    food.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Display each food item
  filteredFoods.forEach(food => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    foodItem.innerHTML = `
      <h2>${food.name}</h2>
      <p>${food.description}</p>
    `;
    contentSection.appendChild(foodItem);
  });

  // Show a message if no foods match the filter
  if (filteredFoods.length === 0) {
    contentSection.innerHTML = "<p>No dishes match your search. Try another term!</p>";
  }
}

// Event listener for search functionality
document.getElementById("searchBar").addEventListener("input", (e) => {
  const searchTerm = e.target.value;
  loadThaiFoods(searchTerm);
});

// Load foods on page load
window.onload = () => {
  loadThaiFoods();
};

