import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/TopicServices.js"
import "./SearchBar.css"


export const SearchBar = ({allPosts, setSelectedTopic}) => {
    const [searchInput, setSearchInput] = useState("")
    const [topics, setTopics] = useState([])
    // const [displayedPosts, setDisplayedPosts] = useState([])


    // get all topics
    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setTopics(topicsArray)
            console.log('topics set')
        })
        // const topicArray = allPosts.map(post => post.topic)
        // setTopics(topicArray)
        
    },[allPosts])

//    // return post results for search input
//    useEffect(() => {
//         const foundPosts = filteredTopics.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase()))
//         setDisplayedPosts(foundPosts)
//     }, [searchInput, setDisplayedPosts])

    return (
        <div key="navigation">
            <div>
                <select onChange={(event) => setSelectedTopic(event.target.value)} id="topics">
                    <option value="0">all topics...</option>
                        {topics.map(topic => {
                            return <option key="topic-info" value={topic.id}>{topic.name}</option>
                        })} 
                </select>
            </div>
            <div>
                <input onChange={(event) => {setSearchInput(event.target.value)}} value={searchInput} type="text" placeholder="search posts..."/>
            </div>
        </div>
    )
}