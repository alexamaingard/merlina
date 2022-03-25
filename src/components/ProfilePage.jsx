import '../styles/profile-page.css'

export const ProfilePage = () => {
    return(
        <section className="profile-page">
            <div className="profile-info">
                <div className="profile-info-left">
                    <h2>Hello, I'm</h2>
                    <h1>Alexa Maingard</h1>
                    <h3>**Catchy phrase here**</h3>
                    <p>
                    {/*I'm sipping coffee with my nose stuck on a book 99% of my free time.*/}
                    Full Stack Software Developer with a background in social media management.
                    Currently focused on ...
                    </p>
                </div>
                {/* <img id="profile-pic" src={process.env.PUBLIC_URL + `/assets/images/lexy.jpg`} alt="profile pic" /> */}
            </div>
        </section>
    )
}