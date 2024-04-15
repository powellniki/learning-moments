import { Link, useNavigate } from "react-router-dom"
import "./NavigationBar.css"

export const NavigationBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navigation">
            <li className="nav-item">
                <Link to="/">HOME</Link>
            </li>
            <li className="nav-item">
                <Link to="/profile">MY PROFILE</Link>
            </li>
            <li className="nav-item">
                <Link to="/myposts">MY POSTS</Link>
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
