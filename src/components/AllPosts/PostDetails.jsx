import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostByPostId } from "../../services/postServices.js"
import "./Post.css"
import "./PostDetails.css"


export const PostDetails = ({currentUser}) => {
    const [post, setPost] = useState({})



    const {postId} = useParams()

  
    useEffect(() => {
        getPostByPostId(postId).then(postData => {
            const postObject = postData[0]
            setPost(postObject)
        }) 
    }, [postId])

    const handleEdit = () => {
        console.log("edit button clicked!")
        // will need to eventually add navigation to take us to edit post
    }


    return (
        <div>
            <article className="post">
                    <div className="post-header">
                        <span><button className="btn-back">←</button></span>
                        <div>
                            <span className="post-info">@{post.user?.userName}/<span className="post-topic">{post.topic?.name}</span></span>
                        </div>
                    </div>
                    <div className="post-title">{post.title}</div>
                    <div className="post-info">{post.date}</div>
                    <p className="post-body">{post.body}</p>
                    <div><span className="like-heart"> ♥ </span><span>{post.likes?.length}</span></div>
            </article>
            <div className="btn-edit-container">
                {/* if the logged in user is the author of that post, the edit button should display */}
                {currentUser.id === post?.userId ? <button onClick={handleEdit} className="btn-edit">Edit Post</button> : ""}
            </div>
        </div>

    )
}