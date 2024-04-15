import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostByPostId } from "../../services/postServices.js"
import "./Post.css"
import "./PostDetails.css"
import { postLikes } from "../../services/LikeServices.js"


export const PostDetails = ({currentUser}) => {
    const [post, setPost] = useState({})

    const {postId} = useParams()


    const getAndSetPost = () => {
        getPostByPostId(postId).then(postData => {
            const postObject = postData[0]
            setPost(postObject)
        }) 
    }

    useEffect(() => {
        getAndSetPost()
    }, [])

    // when the user clicks the LIKE button, the count should increase by 1
    const handleLike = () => {
        
        const newLike = {
            userId: currentUser.id,
            postId: post.id
        }
        postLikes(newLike)
        getAndSetPost()
        // eventually this will navigate to favorites page
    }

    const handleDislike = () => {
        console.log("disliked!")
        //will need to add functionality to this
    }
    

    const handleEdit = () => {
        console.log("edit button clicked!")
        // will need to eventually add navigation to take us to edit post
    }



    return (
        <div>
            <article className="post">
                <div className="post-header">
                    <div>
                        <span className="post-info">@{post.user?.userName}/<span className="post-topic">{post.topic?.name}</span></span>
                    </div>
                </div>
                <div className="post-title">{post.title}</div>
                <div className="post-info">{post.date}</div>
                <p className="post-body">{post.body}</p>
                <div>
                    {/* if the logged in user is not the author of the post, they can like it and count goes up by 1*/}
                    {currentUser.id !== post?.userId ? <button onClick={handleLike}> ⇧ </button> : "⇧"}
                        <span>{post.likes?.length}</span>
                    {/* if the logged in user is not the author of the post, they can like it and count goes up by 1*/}
                    {currentUser.id !== post?.userId ? <button onClick={handleDislike}> ⇩ </button> : "⇩"}
                    {/* if the logged in user has liked post, they can unlike it and count goes down by 1*/}
                </div>
            </article>
            <div className="btn-edit-container">
                {/* if the logged in user is the author of that post, the edit button should display */}
                {currentUser.id === post?.userId ? <button onClick={handleEdit} className="btn-edit">Edit Post</button> : ""}
            </div>
        </div>

    )
}