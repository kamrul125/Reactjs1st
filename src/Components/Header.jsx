import React from 'react'
import myImage from '../assets/images/myImage.png'


const Header = () => {
  return (
    <div className ="brandname">
       <header className="header">
        <div className="logo">Brandname</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="join-btn">JOIN US</button>
        </div>
      </header>
      <main className="main-section">
        <div className="text-content">
          <h5>Welcome</h5>
          <h1>
            Best Learning <br /> Opportunities
          </h1>
          <p>Our goal is to make online </p>
          <p>education work for everyone</p>
          <div className="cta-buttons">
            <button className="join-now">Join Us</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        <div className="image-section">
          <img
            src= {myImage}
            alt="Student"
            className="student-img"
          />
        </div>
      </main>
    </div>
  
  )
}

export default Header
