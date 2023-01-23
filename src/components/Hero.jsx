import '../container/App.scss'

const Hero = () => {
  return (
    <div className="hero">
      <div className="diagonal-hero-bg">
        <div className="hero-title">
          <h1>
            Hi, My name is <span className='hero-name'>
              Fatemeh</span><br />I am a Developer.
          </h1>
        </div>
        <div className="stars">
          <div className="small"></div>
          <div className="medium"></div>
          <div className="big"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero