import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getPostByPostId, getPostByUserLikes } from "../../services/postServices.js"
import { postLikes } from "../../services/LikeServices.js"
import "./Post.css"
import "./PostDetails.css"


export const PostDetails = ({currentUser}) => {
    const [post, setPost] = useState({})
    const [likesExpandPost, setLikesExpandPost] = useState([])


    const {postId} = useParams()
    const navigate = useNavigate()


    const getAndSetPost = () => {
        getPostByPostId(postId).then(postData => {
            const postObject = postData[0]
            setPost(postObject)
        }) 
    }

    const getLikesForPost = () => {
        getPostByUserLikes(postId).then(likesArray => {
            setLikesExpandPost(likesArray)
        })
    }

    useEffect(() => {
        getAndSetPost()
        getLikesForPost()
    }, [currentUser])

    
    const checkIfLiked = () => {
        const likedByCurrentUser = likesExpandPost.some(like => like.userId === currentUser.id)

        if (!likedByCurrentUser) {
            handleLike()
        } else {
            window.alert('you have already liked this post!')
        }
    }

    // when the user clicks the LIKE button, the count should increase by 1
    const handleLike = () => {
        
        const newLike = {
            userId: currentUser.id,
            postId: post.id
        }
        postLikes(newLike).then(getAndSetPost()).then(getLikesForPost())
    }


    const handleEdit = () => {
        navigate(`/`)
    }



    return (
        <div>
            <article className="post">
                <div className="post-header">
                    <div>
                        <Link to={`/user/${post.userId}`}>
                            <span className="post-info">@{post.user?.userName}/ </span>
                        </Link>
                        <span className="post-topic">{post.topic?.name}</span>
                    </div>
                </div>
                <div className="post-title">{post.title}</div>
                <div className="post-info">{post.date}</div>
                <p className="post-body">{post.body}</p>
                <div>
                    {currentUser.id !== post?.userId ? <button onClick={checkIfLiked}> ⇧ </button> : ""}
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