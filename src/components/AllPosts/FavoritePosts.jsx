import { useEffect, useState } from "react"
import { getPostByUserLikes } from "../../services/postServices.js"
import "./Post.css"
import "./PostDetails.css"
import { Link } from "react-router-dom"
import { unlikePost } from "../../services/LikeServices.js"


export const FavoritePosts = ({currentUser}) => {
    const [favoritePosts, setFavoritePosts] = useState([])


const getAndSetPosts = () => {
    getPostByUserLikes(currentUser).then(likesArray => {
       setFavoritePosts(likesArray)
    })
}

const handleUnlike = (likeId) => {
    unlikePost(likeId).then(
        getAndSetPosts()
    )
}


useEffect(() => {
    getAndSetPosts()
}, [currentUser])


    return (
        <div>
            <article className="post">
                <div>
                    {favoritePosts.map(post => {
                        return (
                            <section className="post-item" key={post.id}>
                                <Link to={`/AllPosts/${post.id}`}>
                                    <div className="post-title">{post.post?.title}</div>
                                </Link>
                                <div className="btn-edit"><button onClick={() => {handleUnlike(post.id)}}>Unlike</button></div>
                            </section>
                        )
                    })}
                </div>
            </article>
        </div>
    )
}