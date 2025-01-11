// script.js

// Array of habits
const habits = [
  {
    title: 'Stay Hydrated',
    description:
      'Drink at least 8 glasses of water daily to keep your body hydrated.',
  },
  {
    title: 'Eat Balanced Meals',
    description:
      'Include fruits, vegetables, protein, and whole grains in your diet.',
  },
  {
    title: 'Exercise Regularly',
    description: 'Aim for 30 minutes of physical activity each day.',
  },
  {
    title: 'Get Quality Sleep',
    description: 'Ensure 7-8 hours of uninterrupted sleep every night.',
  },
  {
    title: 'Practice Mindfulness',
    description: 'Spend time meditating or journaling to reduce stress.',
  },
];

// Function to dynamically load habits
function loadHabits() {
  const habitsSection = document.getElementById('habits-content');
  habitsSection.innerHTML = ''; // Clear existing content
  habits.forEach((habit, index) => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${index + 1}. ${habit.title}</h2>
      <p>${habit.description}</p>
    `;
    habitsSection.appendChild(article);
  });
}


// Initial content load
window.onload = loadHabits;
