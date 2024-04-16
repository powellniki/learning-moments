import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { editPost } from "../../services/postServices.js"
import { getAllTopics } from "../../services/TopicServices.js"
import { getPostByPostId } from "../../services/postServices.js"
import "../NewPost/NewPost.css"



const setDate = () => {
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()
    return `${month}/${day}/${year}`
}



export const EditPost = ({currentUser}) => {
    const [topics, setAllTopics] = useState([])
    const [post, setPost] = useState({})

    const {postId} = useParams()
    const navigate = useNavigate()

    
    
    // define new function to get post information based off postId
    // invoke above function on initial render
    useEffect(() => {
        getPostByPostId(postId).then(postData => {
            const postObject = postData[0]
            setPost(postObject)
        })
    },[postId])
    
    

    useEffect(() => {
        getAllTopics().then(topicsArray => {
            setAllTopics(topicsArray)
        }) 
    },[])


    // create a copy of the post so that we can handle the input changes without directly changes the state variable until we set it with the new value
    const handleInputChange = (event) => {
        const postCopy = {...post}
        postCopy[event.target.name] = event.target.value
        setPost(postCopy)
    }


    const handlePostEdit = (event) => {
        event.preventDefault()

        const editedPost = {
            id: post.id,
            title: post.title,
            body: post.body,
            date: setDate(),
            userId: currentUser.id,
            topicId: post.topicId
        }
        editPost(editedPost).then(() => {
             navigate(`/myposts`)
        })
    }



    return (
        <form className="new-post-form">
            <h2>Create a New Post</h2>
            <fieldset>
                <div className="form-item">
                    <select id="topic-select" name="topicId" value={post?.topicId} onChange={handleInputChange} required >
                        <option value="0" id="topic">select a topic...</option>
                            {topics.map(topic => {
                                return <option key={topic.id} value={topic.id} > {topic.name} </option>
                            })}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <input type="text" name="title" value={post?.title} onChange={handleInputChange} required ></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-item">
                    <textarea type="text" name="body" value={post?.body} onChange={handleInputChange} required ></textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="btn-post">
                    <button onClick={handlePostEdit}>Post</button>
                </div>
            </fieldset>
        </form>
    )
}