import { useState } from "react"
import { getPostDetails } from "../../services/postServices.js"
import { useEffect } from "react"
import "./AllPosts.css"




export const AllPosts = () => {
    const [postDetails, setPostDetails] = useState([])
    const [likeCount, setLikecount] = useState(0)

    // get all post details from database
    useEffect(() => {
        getPostDetails().then(postArray => {
            setPostDetails(postArray)
            console.log('post details set')
        })
    },[])
    
    // display the like count for each post
    useEffect(() => {
        postDetails.map(post => {
            let count = post.likes.length
            setLikecount(count)
            console.log('like counts set')
        })
    },[postDetails])


    return (
        <div className="posts-container">
            <h2>All Posts</h2>
            <div className="posts">
                {postDetails.map(postObject => {
                    return (
                        <div key={postObject.id} className="underline">
                            <section className="post">
                                <div className="post-info">@{postObject.user.userName}/ <span className="post-topic">{postObject.topic.name}</span></div>
                                <div className="post-title">{postObject.title}</div>
                                <div className="post-body">{postObject.body}</div>
                                <div className="like-object">
                                    <button className="like-heart">♥</button>
                                    <span className="like-count">{likeCount}</span>
                                </div>
                            </section>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}