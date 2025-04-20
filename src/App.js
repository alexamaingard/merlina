import React from 'react';
import Fade from 'react-reveal/Fade';

import { AboutPage } from './components/AboutPage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { ProfilePage } from './components/ProfilePage';
import { SocialMedia } from './components/SocialMedia';

import './styles/App.css';
import './styles/reset.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <SocialMedia />
      <ProfilePage />
      <Fade>
        <AboutPage />
        <Portfolio />
        <Contact />
      </Fade>
      {/* <section>
                <section className="portfolio-page" id="portfolio">
                <h1>PORTFOLIO PAGE</h1>
                </section>
            </section> */}
      <Footer />
    </div>
  );
};
