import { useState } from "react"
import { getAllPosts } from "../../services/postServices.js"
import { useEffect } from "react"
import "./AllPosts.css"
// import { SearchBar } from "./SearchBar.jsx"
import { Post } from "./Post.jsx"
import { SearchBar } from "./SearchBar.jsx"




export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [likeCount, setLikecount] = useState(0)    



    // get all post details from database
    useEffect(() => {
        getAllPosts().then(postArray => {
            setAllPosts(postArray)
            console.log('post details set')
        })
    },[])

    // display the like count for each post
    useEffect(() => {
        allPosts.map(post => {
            let count = post.likes.length
            setLikecount(count)
            console.log('like counts set')
        })
    },[allPosts])


    return (
        <div>
            <h2>All Posts</h2>
            <SearchBar allPosts={allPosts}/>
            <div>
                {allPosts.map(post => {
                    return <Post post={post} likeCount={likeCount} key={post.id}/>
                })}
            </div>
        </div>
    )
}