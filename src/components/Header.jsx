import '../styles/header.css'

export const Header = () => {
    return(
        <nav className="header">
            <div id='header-left'>
                <a href='#profile'>AM</a>
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
                {/* <li id='resume-button'>
                    <a 
                        href='https://www.canva.com/design/DAE9kmsCHXE/5Dvu7wlsB-aU-YHn00Kf4A/view#1'
                        target='_blank'
                        rel="noreferrer"
                        id='resume-link'    
                    >
                        Resume
                    </a>
                </li> */}
            </ul>
        </nav>
    )
}