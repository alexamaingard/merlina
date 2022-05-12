import '../styles/portfolio.css'

export const Portfolio = () => {
    return(
        <section className='portfolio-page' id='portfolio'>
            <div className='portfolio-info'>
                <h2>Some things I've built</h2>
                <div className='portfolio-project'>
                    <div className='outter-frame'>
                        <div className='inner-frame'></div>
                        <div className='portolio-image'>
                            <img 
                                src={
                                    process.env.PUBLIC_URL +
                                    `/assets/images/book-witch.png`
                                } 
                                alt='Book-Witch'
                                id='book-witch'
                            />
                        </div>
                    </div>
                    <div className='project-info'>
                        <div className='proj-info-container'>
                            <h3>Book Witch</h3>
                            <p>
                                Web app for tracking your reading progress and the books in your libraries.
                                Save books into your Read, Currently Reading or Want to Read shelves.
                            </p>
                            <a 
                                href='https://github.com/alexamaingard/reading-tracker' 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                View code &#10148;
                            </a>
                        </div>
                    </div>
                </div>
                <div className='portfolio-project' id='reverse'>
                    <div className='project-info'>
                        <h3>Pokimo & King</h3>
                        <div className='proj-info-container'>
                            <p>
                                Forum for users to rate Pokémon First Gen and discuss Pokémon related 
                                topics. Group project where I was responsible for building the backend.
                            </p>
                            <a 
                                href='https://github.com/alexamaingard/project-team-fullstack' 
                                target='_blank' 
                                rel='noreferrer'
                            >
                                View code &#10148;
                            </a>
                        </div>
                    </div>
                    <div className='outter-frame'>
                        <div className='inner-frame'></div>
                        <div className='portolio-image'>
                            <img 
                                src={
                                    process.env.PUBLIC_URL +
                                    `/assets/images/pokemon.png`
                                } 
                                alt='Pokimo-King'
                            />
                        </div>
                    </div>
                </div>
                <div className='portfolio-project'>
                    <div className='outter-frame'>
                        <div className='inner-frame'></div>
                        <div className='portolio-image'>
                            <img 
                                src={
                                    process.env.PUBLIC_URL +
                                    `/assets/images/migraine-home.png`
                                } 
                                alt='Book-Witch'
                                id='book-witch'
                            />
                        </div>
                    </div>
                    <div className='project-info'>
                        <div className='proj-info-container'>
                            <h3>Migraine Witch</h3>
                            <p>
                                Web app for logging migraine attacks and their symptoms, triggers, etc.
                                It's main purpose is to help migraine patients understand their condition 
                                and pain better.
                            </p>
                            <div>
                                <a href="https://migraine-witch.herokuapp.com/" id='live-demo'>
                                        Live Demo &#10148;
                                </a>
                                <a 
                                    href='https://github.com/alexamaingard/migraine-witch' 
                                    target='_blank' 
                                    rel='noreferrer'
                                >
                                    View code &#10148;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}