import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUsersById } from "../../services/userService.js";

export const Users = ({currentUser}) => {
    const [user, setUser] = useState({})

    const navigate = useNavigate()
    const {userId} = useParams()


    useEffect(() => {
        getUsersById(userId).then(userData => {
            const userObject = userData[0]
            setUser(userObject)
        }) 
    },[userId])



    //need user name, cohort number, number of posts written will display

    return (
        <div>
            <div>Username: {user.userName}</div>
            <div>Cohort: {user.cohort}</div>
            <div>Number of Posts: {user.posts?.length}</div>
            <div>
                {currentUser.id === user.id ? <button onClick={() => {navigate('/profile')}}>EDIT PROFILE</button> : ""}
            </div>
        </div>
    )
}