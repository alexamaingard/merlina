import '../styles/header.css'

export const Header = () => {
    return(
        <nav className="header">
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li id="resume-button">Resume</li>
            </ul>
        </nav>
    )
}