import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/AllPosts/AllPosts.jsx"
import { NavigationBar } from "../components/NavigationBar/NavigationBar.jsx"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/AllPosts/PostDetails.jsx"
import { NewPost } from "../components/NewPost/NewPost.jsx"
import { MyPosts } from "../components/MyPosts/MyPosts.jsx"
import { EditPost } from "../components/MyPosts/EditPost.jsx"
import { FavoritePosts } from "../components/AllPosts/FavoritePosts.jsx"
import { Users } from "../components/Users/Users.jsx"
import { EditProfile } from "../components/Users/EditProfile.jsx"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localUser = localStorage.getItem("learning_user")
        const localUserObject = JSON.parse(localUser)
        setCurrentUser(localUserObject)
    }, [])

    return (
        <Routes>
            <Route path="/" element={
            <>
                <NavigationBar />
                <Outlet />
            </>} 
            >
                <Route index element={<AllPosts />} />

                <Route path="AllPosts">
                    {/* <Route index element={<AllPosts />} /> */}
                    <Route path=":postId" element={<PostDetails currentUser={currentUser} />}/>
                    <Route path="edit/:postId" element={<EditPost currentUser={currentUser} /> } />
                </Route>

                <Route path="profile" element={<EditProfile currentUser={currentUser}/>} />

                <Route path="newpost" element={<NewPost currentUser={currentUser} />} />

                <Route path="user/:userId" element={<Users currentUser={currentUser}/>} />

                <Route path="myposts" element={<MyPosts currentUser={currentUser}/>} />
                    
                <Route path="favorites" element={<FavoritePosts currentUser={currentUser} />} />
            </Route>
        </Routes>
    )
}