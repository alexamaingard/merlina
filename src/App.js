import { Header } from "./components/Header";
import { ProfilePage } from "./components/ProfilePage";
import { SocialMedia } from "./components/SocialMedia";
import "./styles/App.css"
import "./styles/reset.css"

export const App = () => {
    return (
        <div className="App">
            <Header />
            <SocialMedia />
            <ProfilePage />
            {/********** DIVIDER **********/}
            <section>
                <section className="about-me-page" id="about-me">
                <h1>ABOUT ME PAGE</h1>
                </section>
                <section className="portfolio-page" id="portfolio">
                <h1>PORTFOLIO PAGE</h1>
                </section>
                <section className="contact-page" id="contact">
                <h1>CONTACT PAGE</h1>
                </section>
            </section>
        </div>
    );
}