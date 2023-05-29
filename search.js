// Get references to the search form and input element
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


// Add event listener to the search form
searchForm.addEventListener('submit', function () {
  const searchTerm = searchInput.value.toLowerCase();
  const posts = document.getElementsByClassName('post');

  // Loop through each post and check if it contains the search term
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const postText = post.textContent.toLowerCase();
    
    if (postText.includes(searchTerm)) {
      // Show the post if it contains the search term
      post.style.backgroundColor = 'yellow';
    }else{
        searchInput.value = "Keyword Not Present"
    }
  }
});


