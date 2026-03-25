import React from 'react';
import './Figma.css';

const Figma = () => {
    const sections = [
        {
            title: "Auto Layout",
            description: "Master the most powerful feature in Figma to create responsive and dynamic layouts that adjust to content.",
            icon: "📐"
        },
        {
            title: "Components & Variants",
            description: "Build scalable design systems using reusable components and organized variants for every state.",
            icon: "♻️"
        },
        {
            title: "Prototyping",
            description: "Create high-fidelity interactive prototypes with advanced transitions and smart animate.",
            icon: "⚡"
        }
    ];

    return (
        <section id="figma" className="figma-section">
            <div className="container">
                <div className="header-content">
                    <h2 className="section-title">Master <span className="text-gradient">Figma</span> Excellence</h2>
                    <p className="section-subtitle">Level up your design workflow with advanced Figma techniques used by industry pros.</p>
                </div>
                
                <div className="figma-grid">
                    {sections.map((item, index) => (
                        <div key={index} className="figma-card glass">
                            <div className="card-icon">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-desc">{item.description}</p>
                            <div className="card-footer">
                                <span className="learn-more">Learn Skills →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-elements">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
};

export default Figma;
