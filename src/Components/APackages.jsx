import React from 'react'
import { FaAlignJustify } from "react-icons/fa";
import icon from '../assets/images/fixed-width sec-.png'
import Expert from '../assets/images/expert.png'
import './Components/APackages.css'

const APackages = () => {
  return (
    <div className="app">
    {/* Approachable Packages Section */}
    <section className="packages-section">
      <div className="packages-content">
        <h2 className="section-title">Approachable Packages</h2>
        <p className="section-description">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: <br /> Newtonian mechanics
        </p>
        <a href="#" className="learn-moretwo">
          Learn More &rarr;
        </a>
      </div>
      <div className="packages-cards">
        {/* Card 1 */}
        <div className="card">
          <div className="iconone">
            <img
              src= {icon}
              alt="Certified Teacher Icon"
            />
          </div>
          <h3 className="card-title">Certified Teacher</h3>
          <div className="card-line"></div>
          <p className="card-description">
            The gradual <br /> accumulation of <br />information about
          </p>
        </div>
        {/* Card 2 */}
        <div className="card">
     
          <div className="card-icon">
            <img
              src={Expert}
              alt="Expert Instruction Icon"
            />
          </div>
          <h3 className="card-title">Expert Instruction</h3>
          <div className="card-line"></div>
          <p className="card-description">
          The gradual <br /> accumulation of <br />information about
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default APackages
