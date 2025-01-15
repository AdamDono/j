

document.getElementById('postBtn').addEventListener('click', function () {
    const statusInput = document.getElementById('statusInput');
    const postContainer = document.getElementById('postContainer');

    if (statusInput.value.trim() !== "") {
        // Create post element
        const post = document.createElement('div');
        post.className = 'post';

        // Add status text
        const statusText = document.createElement('p');
        statusText.textContent = statusInput.value;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function () {
            postContainer.removeChild(post);
        });

        // Append status text and delete button to post
        post.appendChild(statusText);
        post.appendChild(deleteBtn);

        // Append post to container
        postContainer.appendChild(post);

        // Clear input
        statusInput.value = "";
    }
});
