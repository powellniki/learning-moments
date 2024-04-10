import { Routes, Route, Outlet } from "react-router-dom"
import { AllPosts } from "../components/AllPosts/AllPosts.jsx"
import { NavigationBar } from "../components/NavigationBar/NavigationBar.jsx"
import { useEffect, useState } from "react"

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

                <Route path="AllPosts" element={<AllPosts />} />
                <Route path="profile" element={<>My Profile</>} />
                <Route path="posts" element={<>My Posts</>} />
                <Route path="newpost" element={<>Create Post Here</>} />
                <Route path="favorites" element={<>Favorite Posts</>} />
            </Route>
        </Routes>
    )
}