import React from 'react'
import './Registration.css'

const Registration = () => {
  return (
    <section id="register" className="registration">
      <div className="container">
        <div className="registration-card glass animate-fade-in">
          <h2 className="section-title text-gradient">Join the Workshop</h2>
          <p className="registration-subtitle">Reserve your spot today. Limited seats available!</p>
          <form className="registration-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" className="glass" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" className="glass" />
            </div>
            <div className="form-group">
              <label>Interest Area</label>
              <select className="glass">
                <option>UI Design</option>
                <option>UX Research</option>
                <option>Full Scale Design-build</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Register Now</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Registration
