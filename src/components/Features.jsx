import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      title: "UI Design",
      description: "Master the art of creating visually stunning interfaces using modern typography and layouts.",
      icon: "🎨"
    },
    {
      title: "UX Strategy",
      description: "Learn user research, wireframing, and psychological principles of web design.",
      icon: "🧠"
    },
    {
      title: "Prototyping",
      description: "Build high-fidelity prototypes that mimic real-world interactions and transitions.",
      icon: "📱"
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title text-center animate-fade-in">What You’ll <span className="text-gradient">Learn</span></h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
