import { Link } from "react-router-dom"
import "./Post.css"


export const Post = ({post}) => {



    return (
        <div className="underline">
            <section className="all-post">
                <div className="post-info">@{post.user?.userName}/ <span className="post-topic">{post.topic?.name}</span></div>
                    <Link to={`/AllPosts/${post.id}`}>
                        <div className="post-title">{post.title}</div>
                    </Link>
                <div className="like-object">
                    <button className="like-heart"> ♥ </button>
                    <span className="like-count">{post.likes.length}</span>
                </div>
            </section>
        </div>
    )
}