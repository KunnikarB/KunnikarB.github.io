// Load blog posts dynamically
document.addEventListener('DOMContentLoaded', () => {
  const blogPostsContainer = document.getElementById('blog-posts');
  const categories = document.querySelectorAll('.blog-categories button');

  fetch('projects.json')
    .then((response) => response.json())
    .then((posts) => {
      renderPosts(posts);

      categories.forEach((button) => {
        button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');
          const filteredPosts =
            category === 'all'
              ? posts
              : posts.filter((post) => post.category === category);
          renderPosts(filteredPosts);
        });
      });
    });

  // Function to render posts on the page dynamically
  function renderPosts(posts) {
    blogPostsContainer.innerHTML = '';
    posts.forEach((post) => {
      const postElement = document.createElement('div');
      postElement.className = 'blog-post';
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <img src="${post.img}" alt="${post.title}">
        <p>${post.excerpt}</p>
        <a href="${post.link}" target="_blank">Link to project</a>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
});
