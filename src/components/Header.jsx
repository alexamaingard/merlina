import '../styles/header.css'

export const Header = () => {
    return(
        <nav className="header">
            <div id='header-left'>
                <a href='#profile'>Placeholder</a>
            </div>
            <ul>
                <li>
                    <a href='#about-me'>About Me</a>
                </li>
                <li>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
                <li id='resume-button'>Resume</li>
            </ul>
        </nav>
    )
}