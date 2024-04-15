
export const getAllPosts = async () => {
    return fetch('http://localhost:8088/posts?_expand=topic&_expand=user&_embed=likes').then((res) => res.json())
}


export const getPostByPostId = (postId) => {
    return fetch(`http://localhost:8088/posts?id=${postId}&_expand=topic&_expand=user&_embed=likes`).then((res) => res.json())
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

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
}