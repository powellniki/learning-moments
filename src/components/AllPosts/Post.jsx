import { Link } from "react-router-dom"
import "./Post.css"
import { PostDetails } from "./PostDetails.jsx"


export const Post = ({ post }) => {



    return (
        <div className="underline">
            <section className="post">
                <div className="post-info">@{post.user.userName}/ <span className="post-topic">{post.topic.name}</span></div>
                    <Link to={`/AllPosts/${post.id}`}>
                        <div className="post-title">{post.title}</div>
                    </Link>
                <div className="post-body">{post.body}</div>
                <div className="like-object">
                    <button className="like-heart"> ♥ </button>
                    <span className="like-count">{post.likes.length}</span>
                </div>
            </section>
        </div>
    )
}