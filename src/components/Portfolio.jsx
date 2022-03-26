import '../styles/portfolio.css'

export const Portfolio = () => {
    return(
        <section className='portfolio-page' id='portfolio'>
            <div className='portfolio-info'>
                <h2>Some things I've built</h2>
                <div className='portfolio-project'>
                    <div className='outter-frame'>
                        <div className='inner-frame'></div>
                        <div className='portolio-image'></div>
                    </div>
                    <div className='project-info'>
                        <h3>Reading/Library Tracker</h3>
                        <p>
                            Web app for tracking your reading progress and the books in your libraries.
                            Save books into your Read, Currently Reading or Want to Read shelves.
                        </p>
                    </div>
                </div>
                <div className='portfolio-project'>
                    <div className='project-info'>
                        <h3>Reading/Library Tracker</h3>
                        <p>
                            Web app for tracking your reading progress and the books in your libraries.
                            Save books into your Read, Currently Reading or Want to Read shelves.
                        </p>
                    </div>
                    <div className='outter-frame'>
                        <div className='inner-frame'></div>
                        <div className='portolio-image'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}