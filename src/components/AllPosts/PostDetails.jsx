import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getPostByPostId, getPostByUserLikes } from "../../services/postServices.js"
import { postLikes } from "../../services/LikeServices.js"
import "./Post.css"
import "./PostDetails.css"


export const PostDetails = ({currentUser}) => {
    const [post, setPost] = useState({})
    const [userLikes, setUserLikes] = useState([])

    const {postId} = useParams()
    const navigate = useNavigate()


    const getAndSetPost = () => {
        getPostByPostId(postId).then(postData => {
            const postObject = postData[0]
            setPost(postObject)
        }) 
    }

    const getAndSetUserLikes = () => {
        getPostByUserLikes(currentUser).then(likesArray => {
            setUserLikes(likesArray)
        })
    }

    useEffect(() => {
        getAndSetPost()
        getAndSetUserLikes()
    }, [currentUser])

    


    // when the user clicks the LIKE button, the count should increase by 1
    const handleLike = () => {
        
        const newLike = {
            userId: currentUser.id,
            postId: post.id
        }

        if (currentUser.id !== userLikes?.userId) {
            postLikes(newLike)
            getAndSetPost()
        } else {
            window.alert("you have already liked this post")
        }
        // eventually this will navigate to favorites page
    }


    const handleEdit = () => {
        navigate(`/`)
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
                    {currentUser.id !== post?.userId ? <button onClick={handleLike}> ⇧ </button> : ""}
                    <span>{post.likes?.length}</span>
                </div>
            </article>
            <div className="btn-edit-container">
                {/* if the logged in user is the author of that post, the edit button should display */}
                {currentUser.id === post?.userId ? 
                    <Link to={`/AllPosts/edit/${post.id}`}>
                        <button onClick={handleEdit} className="btn-edit">Edit Post</button>
                    </Link>
                 : ""}
            </div>
        </div>

    )
}