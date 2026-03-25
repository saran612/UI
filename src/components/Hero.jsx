import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content animate-fade-in">
        <h1 className="hero-title">
          UI/UX Design Fundamentals
        </h1>
        <p className="hero-subtitle">
          An immersive workshop on modern UI/UX principles, 
          interaction design, and high-fidelity prototyping.
        </p>
        <div className="hero-actions">
          <a href="#features" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
