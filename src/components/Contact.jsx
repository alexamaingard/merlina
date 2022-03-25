import '../styles/contact.css'

export const Contact = () => {
    return (
        <section className='contact-page' id='contact'>
            <div className='contact-info'>
                <h2>Get In Touch</h2>
                <div className='contact-text-container'>
                    <div className='contact-text'>
                        <p>
                            I'm currently looking for new opportunities. My inbox is always open, even if 
                            you just want to say hi!
                        </p>
                    </div>
                </div>
                <div className='contact-action'>
                    <button 
                        id='say-hi' 
                        onClick={() => window.location = 'mailto:maingard.alexa@gmail.com'}
                    >
                        I want to say hi!
                    </button>
                </div>
            </div>
        </section>
    );
};