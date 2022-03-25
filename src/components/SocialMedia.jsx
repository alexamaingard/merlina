import '../styles/social-media.css'

export const SocialMedia = () => {
    return(
        <nav className="social-media">
                <ul>
                    <li>
                        <a
                            href='https://github.com/alexamaingard'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            <img
                                className='social-image'
                                src={process.env.PUBLIC_URL + `/assets/icons/github.svg`}
                                alt='github'
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/alexa-marie-eliane-maingard-1a641b190'
                            target={'_blank'}
                            rel='noreferrer'
                        >
                            <img
                                src={process.env.PUBLIC_URL + `/assets/icons/linkedin.svg`}
                                alt='linkedIn'
                            />
                        </a>
                    </li>
                    {/* ADD MAIL TO LINK!!! */}
                    <li>
                        <img
                            src={process.env.PUBLIC_URL + `/assets/icons/email.svg`}
                            alt='email'
                        />
                    </li>
                </ul>
        </nav>
    )
}