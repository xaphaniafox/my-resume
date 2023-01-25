import '../sass/sections/_about.scss'
import '../sass/base/_typography.scss'
import '../sass/vendors/_bootstrap.scss'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <h2 className="section-title">About me</h2>
          <div className="row about-wrapper">
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__image load-hidden">
                <img
                  alt="Profile"
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src={require("../assets/profile.jpg")}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__info load-hidden">
                <p className="about-wrapper__info-text">
                  I am a frontend developer; based in Istanbul, Turkey.
                  But I am open to foreign countries to work in. I can 
                  work both remote and hybrid. My hours are flexible 
                  around the clock.
                </p>
                <p className="about-wrapper__info-text">
                  My hobbie is learning; learning new languages, new 
                  programming languages, new skills, solving puzzles, 
                  running and traveling.
                </p>
                <span className="d-flex mt-3">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href="assets/resume.pdf"
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
