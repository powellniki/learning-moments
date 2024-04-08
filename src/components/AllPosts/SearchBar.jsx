import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/TopicServices.js"
import "./SearchBar.css"


export const SearchBar = ({allPosts, setSelectedTopic, filteredTopics, setDisplayedPosts}) => {
    const [searchInput, setSearchInput] = useState("")
    const [topics, setTopics] = useState([])
    // const [displayedPosts, setDisplayedPosts] = useState([])


    // get all topics
    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setTopics(topicsArray)
            console.log('topics set')
        })
    },[allPosts])


    // return post results for search input
    useEffect(() => {
        const searchedPosts = filteredTopics.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase()))
        setDisplayedPosts(searchedPosts)
    }, [searchInput, filteredTopics, setDisplayedPosts])



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