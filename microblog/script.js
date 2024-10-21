document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    const postList = document.getElementById('postList');

    // Create a new post element
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <p>${postContent}</p>
        <small>${new Date().toLocaleString()}</small>
    `;

    // Append the new post to the post list
    postList.prepend(postDiv);

    // Clear the textarea
    document.getElementById('postContent').value = '';
});
