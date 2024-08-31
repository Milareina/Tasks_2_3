document.getElementById('createPostButton').addEventListener('click', function() {
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;
    
    if (title && body) {
        createPost(title, body);
    } 
});

function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        addPostToDOM(json);
    });
}
function addPostToDOM(post) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.textContent = post.title;
    
    const postBody = document.createElement('p');
    postBody.textContent = post.body;
    
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    
    document.getElementById('postsContainer').appendChild(postContainer);
}