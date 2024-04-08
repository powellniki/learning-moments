import { useEffect, useState } from "react"
import "./SearchBar.css"


export const SearchBar = ({allPosts}) => {
    const [searchInput, setSearchInput] = useState("")
    const [topics, setTopics] = useState([])

    const [displayedPosts, setDisplayedPosts] = useState([])
    const [filteredTopics, setFilteredTopic] = useState([])
    const [selectedTopic, setSelectedTopic] = useState([])


    // get all topics
    useEffect(() => {
            const topicArray = allPosts.map(post => post.topic)
            setTopics(topicArray)
            console.log('topics set')
    },[allPosts])

    // // filter results by topic
    // useEffect(() => {
    //     if (selectedTopic > 0) {
    //         const filteredTopicsArray = allPosts.filter(post => post.topic.id === selectedTopic)
    //         setFilteredTopic(filteredTopicsArray)
    //     } else {
    //         setFilteredTopic(allPosts)
    //     }
    // }, [])

    // // return post results for search input
    // useEffect(() => {
    //     const foundPosts = filteredTopics.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase()))
    //     setDisplayedPosts(foundPosts)
    // }, [searchInput])



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