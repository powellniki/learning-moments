import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllTopics } from "../../services/TopicServices.js"
import { postPost } from "../../services/postServices.js"
import "./NewPost.css"


    const setDate = () => {
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth()
        const year = today.getFullYear()
        return `${month}/${day}/${year}`
    }

export const NewPost = ({currentUser}) => {
    const [topics, setAllTopics] = useState([])
    const [topicChoice, setTopicChoice] = useState(0)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setAllTopics(topicsArray)
        }) 
    },[])


    const handlePost = (event) => {
        event.preventDefault()

        const newPost = {
            title: title,
            body: body,
            date: setDate(),
            userId: currentUser.id,
            topicId: topicChoice
        }
        postPost(newPost).then(() => {
             navigate(`/myposts`)
        })
    }
    

    return (
        <form className="new-post-form">
            <h2>Create a New Post</h2>
            <fieldset>
                <div className="form-item">
                    <select id="topic-select" onChange={(event) => {parseInt(setTopicChoice(event.target.value))}} required >
                        <option value="0" id="topic">select a topic...</option>
                            {topics.map(topic => {
                                return <option key={topic.id} value={topic.id} > {topic.name} </option>
                            })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <input type="text" name="title" placeholder="post title" onChange={(event) => {setTitle(event.target.value)}} required ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <textarea type="text" name="text" placeholder="type your post here" onChange={(event) => {setBody(event.target.value)}} required ></textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="btn-post">
                    <button onClick={handlePost}>Post</button>
                </div>
            </fieldset>
        </form>

    )
}