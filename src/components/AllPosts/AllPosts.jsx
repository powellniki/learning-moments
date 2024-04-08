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
    const [selectedTopic, setSelectedTopic] = useState("")
    const [filteredTopics, setFilteredTopic] = useState([])


    // get all post details from database
    useEffect(() => {
        getAllPosts().then(postArray => {
            setAllPosts(postArray)
            console.log('post details set')
        })
    },[])


    // filter results by topic
    useEffect(() => {
        if (selectedTopic > 0) {
            const filteredTopicsArray = allPosts.filter(post => post.topic.id === parseInt(selectedTopic))
            setFilteredTopic(filteredTopicsArray)
        } else {
            setFilteredTopic(allPosts)
        }
    }, [allPosts, selectedTopic])


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
            <SearchBar allPosts={allPosts} setSelectedTopic={setSelectedTopic} filteredTopics={filteredTopics}/>
            <div>
                {filteredTopics.map(post => {
                    return <Post post={post} likeCount={likeCount} key={post.id}/>
                })}
            </div>
        </div>
    )
}