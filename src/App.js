import { AboutPage } from "./components/AboutPage";
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
            <AboutPage />

            {/* <section>
                <section className="portfolio-page" id="portfolio">
                <h1>PORTFOLIO PAGE</h1>
                </section>
                <section className="contact-page" id="contact">
                <h1>CONTACT PAGE</h1>
                </section>
            </section> */}
        </div>
    );
}