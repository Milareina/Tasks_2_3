function createPostHTML(post) {
    return `<div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;
}
function addPostToContainer(container, postHTML) {
    container.innerHTML += postHTML;
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const container = document.getElementById('posts-container');
        posts.forEach(post => {
            const postHTML = createPostHTML(post);
            addPostToContainer(container, postHTML);
        });
    })
    .catch(error => console.error('Ошибка при получении постов:', error));
