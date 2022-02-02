export const WebsiteAlexa = () => {
  return (
    <>
      <nav className="header">
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li id="resume-button">Resume</li>
        </ul>
      </nav>
      <nav className="social-media">
        <ul>
        <li><a href="https://github.com/alexamaingard" target={"_blank"} rel="noreferrer"><img src={process.env.PUBLIC_URL + `/assets/icons/github.svg`} alt="github" /></a></li>
        <li><a href="https://www.linkedin.com/in/alexa-marie-eliane-maingard-1a641b190" target={"_blank"} rel="noreferrer"><img src={process.env.PUBLIC_URL + `/assets/icons/linkedin.svg`} alt="linkedin" /></a></li>
        {/* ADD MAIL TO LINK!!! */}
        <li><img src={process.env.PUBLIC_URL + `/assets/icons/email.svg`} alt="email" /></li>
        </ul>
      </nav>
      {/********** DIVIDER **********/}
      <section className="profile-page">
        <div className="profile-info">
          <div className="profile-info-left">
            <h2>Hello, I'm</h2>
            <h1>Alexa Maingard</h1>
            <h3>Full Stack Software Developer</h3>
            <p>{/*I'm sipping coffee with my nose stuck on a book 99% of my free time.*/}Text here</p>
          </div>
          {/* <img id="profile-pic" src={process.env.PUBLIC_URL + `/assets/images/lexy.jpg`} alt="profile pic" /> */}
        </div>
      </section>
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
    </>
  );
}
