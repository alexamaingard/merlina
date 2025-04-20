import '../styles/about-page.css';

import { ReactComponent as CoffeeMug } from '../assets/coffee-mug.svg';
import { ReactComponent as Book } from '../assets/book.svg';

export const AboutPage = () => (
  <section className="about-me-page" id="about-me">
    <div className="about-me-info">
      <div className="about-info-left">
        <h2>About me</h2>
        <div id="no-display-container">
          <div className="circle" id="no-display">
            <img
              className="profile-pic"
              id="no-display-pic"
              src={process.env.PUBLIC_URL + `/assets/images/lexy.jpg`}
              alt="profile pic"
            />
          </div>
        </div>
        <p>
          <span>Hi! I'm Alexa. I'm sipping coffee </span>
          <CoffeeMug />
          <span>with my nose stuck on a book</span>
          <Book />
          <span>99% of my free time.</span>
        </p>
        <p>
          I speak English and Spanish on a native level and German on a B2
          level.
        </p>
        <p>Graduated from a 6-months long intensive Bootcamp.</p>
        <p>I'm located in Graubünden, Switzerland.</p>
        <div className="tech-lists-container">
          <p>Technologies I'm currently working with:</p>
          <div className="tech-lists">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript(ES6)</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li>Prisma</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-info-right">
        <div className="circle" id="display">
          <img
            className="profile-pic"
            id="display-pic"
            src={process.env.PUBLIC_URL + `/assets/images/lexy.jpg`}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  </section>
);
