
export const getAllPosts = async () => {
    return fetch('http://localhost:8088/posts?_expand=topic&_expand=user&_embed=likes').then((res) => res.json())
}

// using this to get the amount of likes per post
export const getPostByPostId = (postId) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=topic&_expand=user&_embed=likes`).then((res) => res.json())
}

// using this to try to get the like information to use against currentUser
export const getPostByUserLikes = (postId) => {
    return fetch(`http://localhost:8088/likes?postId=${postId}&_expand=post`).then((res) => res.json())
}



export const postPost = (newPost) => {
    return fetch('http://localhost:8088/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost)
    }) 
}


export const editPost = (editedPost) => {
    return fetch(`http://localhost:8088/posts/${editedPost.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedPost)
    })
}


export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
}