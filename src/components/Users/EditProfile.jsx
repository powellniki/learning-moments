import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUsersById, updateUser } from "../../services/userService.js"


export const EditProfile = ({currentUser}) => {
    const [user, setUser] = useState({
        userName: "",
        cohort: 0
    })
    const navigate = useNavigate()


    useEffect(() => {
        getUsersById(currentUser.id).then(userData => {
            const userObject = userData[0]
            setUser(userObject)
        })
    },[currentUser])


    const handleInputChange = (event) => {
        const userCopy = {...user}
        userCopy[event.target.name] = event.target.value
        setUser(userCopy)
    }

    const handleProfileUpdate = (event) => {
        event.preventDefault()

        const updatedUserProfile = {
            id: user.id,
            userName: user.userName,
            email: user.email,
            cohort: user.cohort
        }

        updateUser(updatedUserProfile).then(navigate(`/profile`))
        }
    


    return (
        <form>
            <h2>Update User Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        type="text"
                        name="userName"
                        value={user?.userName}
                        className="form-control"
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Cohort: </label>
                    <input
                        type="number"
                        name="cohort"
                        value={user?.cohort}
                        className="form-control"
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button
                        onClick={handleProfileUpdate}
                    >Save Changes</button>
                </div>
            </fieldset>
        </form>
    )
}