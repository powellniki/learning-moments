
export const getLikesByPostId = (postId) => {
    return fetch(`http://localhost:8088/likes?postId=${postId}&_expand=post`).then((res) => res.json())
}



export const postLikes = (like) => {
    return fetch('http://localhost:8088/likes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(like)
    })
}

export const unlikePost = (likeId) => {
    return fetch(`http://localhost:8088/likes/${likeId}`, {
        method: "DELETE"
    })
}