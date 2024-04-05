
export const getAllPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=topic').then((res) => res.json())
}

export const getPostDetails = () => {
    return fetch('http://localhost:8088/posts?_expand=topic&_expand=user&_embed=likes').then((res) => res.json())
}