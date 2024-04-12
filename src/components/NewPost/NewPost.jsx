import { useEffect, useState } from "react"
import { getAllTopics } from "../../services/TopicServices.js"


export const NewPost = ({currentUser}) => {
    const [topics, setAllTopics] = useState([])
    const [topicChoice, setTopicChoice] = useState(0)

    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setAllTopics(topicsArray)
        }) 
    })


    const handlePost = (event) => {
        event.preventDefault()
        console.log("post submit clicked")
    }

    return (
        <form className="new-post-form">
            <h2>New Post</h2>
            <fieldset>
                <div className="form-item">
                    <label>Topic: </label>
                    <select id="topic-select">
                        <option value="0" id="topic">select a topic...</option>
                            {topics.map(topic => {
                                return <option key={topic.id} value={topic.id}> {topic.name} </option>
                            })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <label>Title: </label>
                    <input type="text" name="title" required></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <label>Body Text: </label>
                    <input type="text" name="title" required></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <button onClick={handlePost}>Post</button>
                    <input type="text" name="title" required></input>
                </div>
            </fieldset>
        </form>

    )
}