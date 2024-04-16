import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/AllPosts/AllPosts.jsx"
import { NavigationBar } from "../components/NavigationBar/NavigationBar.jsx"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/AllPosts/PostDetails.jsx"
import { NewPost } from "../components/NewPost/NewPost.jsx"
import { MyPosts } from "../components/MyPosts/MyPosts.jsx"
import { EditPost } from "../components/MyPosts/EditPost.jsx"

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

                <Route path="profile" element={<>My Profile</>} />

                <Route path="newpost" element={<NewPost currentUser={currentUser} />} />


                <Route path="myposts" element={<MyPosts currentUser={currentUser}/>} />
                    

                <Route path="favorites" element={<>Favorite Posts</>} />
            </Route>
        </Routes>
    )
}