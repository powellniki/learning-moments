import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/TopicServices.js"
import "./SearchBar.css"


export const SearchBar = ({allPosts, setSelectedTopic, filteredTopics, setDisplayedPosts}) => {
    const [searchInput, setSearchInput] = useState("")
    const [topics, setTopics] = useState([])


    // get all topics
    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setTopics(topicsArray)
        })
    },[allPosts])


    // return post results for search input
    useEffect(() => {
        const searchedPosts = filteredTopics.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase()))
        setDisplayedPosts(searchedPosts)
    }, [searchInput, filteredTopics, setDisplayedPosts])



    return (
        <div>
            <div className="dropdown">
                <select onChange={(event) => setSelectedTopic(event.target.value)} id="topics">
                    <option value="0">all topics...</option>
                        {topics.map(topic => {
                            return <option value={topic.id} key={topic.id}>{topic.name}</option>
                        })} 
                </select>
            </div>
            <div className="searchbar">
                <input onChange={(event) => {setSearchInput(event.target.value)}} value={searchInput} type="text" placeholder="search posts..." id="search-bar"/>
            </div>
        </div>
    )
}