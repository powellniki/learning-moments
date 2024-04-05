import "./NavigationBar.css"

export const NavigationBar = () => {
    return (
        <nav className="navigation">
            <div className="nav-main">
                <ul>
                    <li className="nav-item">HOME</li>
                    <li className="nav-item">MY PROFILE</li>
                    <li className="nav-item">MY POSTS</li>
                    <li className="nav-item">NEW POST</li>
                    <li className="nav-item">FAVORITES</li>
                </ul>
            </div>
            <div className="nav-logout">
                <ul>
                    <li className="nav-item">LOGOUT</li>
                </ul>
            </div>
        </nav>
    )
}