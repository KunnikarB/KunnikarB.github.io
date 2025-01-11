// script.js

// Array of habits
const habits = [
  {
    title: 'Stay Hydrated',
    description:
      'Drink at least 8 glasses of water daily to keep your body hydrated. Improves skin health, and boosts energy levels',
  },
  {
    title: 'Eat Balanced Meals',
    description:
      'Include fruits, vegetables, lean proteins, healthy fats and whole grains in your diet. A balanced diet improves energy, mood, and overall health.',
  },
  {
    title: 'Exercise Regularly',
    description:
      'Engage in at least 30 minutes of physical activity daily, such as walking, yoga, or strength training. Exercise enhances cardiovascular health, builds strength, and reduces stress.',
  },
  {
    title: 'Get Quality Sleep',
    description:
      'Aim 7-9 hours of restful sleep every night. Establish a bedtime routine, minimize screen time before bed, and create a relaxing sleep environment.',
  },
  {
    title: 'Practice Mindfulness',
    description:
      'Spend time meditating, journaling, or practicing deep breathing. Mindfulness reduces anxiety, improves focus, and fosters emotional balance.',
  },
  {
    title: 'Schedule Regular Massages',
    description:
      'Incorporate massage therapy into your routine for relaxation and stress relief.',
    link: 'https://letsrelaxstockholm.netlify.app/',
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
      ${habit.link ? `<a href="${habit.link}" target="_blank">Book now</a>` : ''}
    `;
    habitsSection.appendChild(article);
  });
}


// Initial content load
window.onload = loadHabits;
