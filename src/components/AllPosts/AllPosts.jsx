import { useState } from "react"
import { getAllPosts } from "../../services/postServices.js"
import { useEffect } from "react"
import { Post } from "./Post.jsx"
import { SearchBar } from "./SearchBar.jsx"
import "./AllPosts.css"



export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [likeCount, setLikecount] = useState(0)    
    const [selectedTopic, setSelectedTopic] = useState("")
    const [filteredTopics, setFilteredTopic] = useState([])
    const [displayedPosts, setDisplayedPosts] = useState([])


    // get all post details from database
    useEffect(() => {
        getAllPosts().then(postArray => {
            setAllPosts(postArray)
            console.log('posts set')
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




    return (
        <div className="all-posts-home">
            <div className="page-title">
                <h2>All Posts</h2>
            </div>
            <div className="search-posts">
                <SearchBar allPosts={allPosts} setSelectedTopic={setSelectedTopic} setDisplayedPosts={setDisplayedPosts} filteredTopics={filteredTopics}/>
            </div>
            <div className="displayed-posts">
                {displayedPosts.map(post => {
                    return <Post post={post} key={post.id}/>
                })}
            </div>
        </div>
    )
}