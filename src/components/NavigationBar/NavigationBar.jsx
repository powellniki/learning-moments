import { Link, useNavigate } from "react-router-dom"
import "./NavigationBar.css"

export const NavigationBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navigation">
            <li className="nav-item">
                <Link to="/AllPosts">HOME</Link>
            </li>
            <li className="nav-item">
                <Link to="/profile">MY PROFILE</Link>
            </li>
            <li className="nav-item">
                <Link to="/posts">MY POSTS</Link>
            </li>
            <li className="nav-item">
                <Link to="/newpost">NEW POST</Link>
            </li>
            <li className="nav-item">
                <Link to="/favorites">FAVORITES</Link>
            </li>
            {localStorage.getItem("learning_user") ? (
                <li>
                    <Link
                    to=""
                    onClick={() => {
                        localStorage.removeItem("learning_user")
                        navigate("/login", { replace: true })
                    }}
                    >
                    Logout
                    </Link>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}
        // <nav className="navigation">
        //     <div className="nav-main">
        //         <ul>
        //             <li className="nav-item">HOME</li>
        //             <li className="nav-item">MY PROFILE</li>
        //             <li className="nav-item">MY POSTS</li>
        //             <li className="nav-item">NEW POST</li>
        //             <li className="nav-item">FAVORITES</li>
        //         </ul>
        //     </div>
        //     <div className="nav-logout">
        //         <ul>
        //             <li className="nav-item">LOGOUT</li>
        //         </ul>
        //     </div>
        // </nav>