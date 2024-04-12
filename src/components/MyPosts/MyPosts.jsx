import { useEffect, useState } from "react"
import "./MyPosts.css"
import { getAllPosts } from "../../services/postServices.js"
import { Link } from "react-router-dom"



export const MyPosts = ({currentUser}) => {
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(postArray => {
            const filteredPosts = postArray.filter(post => post.userId === currentUser.id)
            setUserPosts(filteredPosts)
        })
    }, [currentUser.id])


    const handleDelete = () => {
        deletePost(post.id)
        console.log("post deleted")
    }

    return (
        <div className="user-posts">
            <h2>My Posts</h2>
            <div className="posts-container">
                {userPosts.map(post => {
                    return (
                        <section key={post.id} className="post-item">
                            <Link to={`/AllPosts/${post.id}`}>
                                <div className="post-title">{post.title}</div>
                            </Link>
                            <div><button className="btn-delete" onClick={handleDelete}>DELETE</button></div>
                        </section>
                    )
                })}
            </div>
        </div>
    )

}