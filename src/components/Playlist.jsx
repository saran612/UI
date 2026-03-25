import React from 'react';
import './Playlist.css';

const Playlist = () => {
    const videos = [
        {
            id: 'nrN2axSSOKg',
            title: 'Color Proportion',
            thumbnail: 'https://img.youtube.com/vi/nrN2axSSOKg/maxresdefault.jpg',
            link: 'https://youtu.be/nrN2axSSOKg?si=vcBnepjp3WI2IF1k'
        },
        {
            id: '3C_22eBWpjg',
            title: 'Layout',
            thumbnail: 'https://img.youtube.com/vi/3C_22eBWpjg/maxresdefault.jpg',
            link: 'https://youtu.be/3C_22eBWpjg?si=k0Bvz3SYv_F5If_Q'
        },
        {
            id: 'cf95Z7Ngg8k',
            title: 'Spacing',
            thumbnail: 'https://img.youtube.com/vi/cf95Z7Ngg8k/maxresdefault.jpg',
            link: 'https://youtu.be/cf95Z7Ngg8k?si=1Ou5ecxjE0UsIF0Q'
        }
    ];

    const playlistLink = "https://youtube.com/playlist?list=PLwO88OKdUpCBSTmSkgosK0JiXNqkaUVbS&si=SQVxoF-iusJRD_BY";

    return (
        <section className="playlist-section" id="resources">
            <div className="container">
                <div className="header-content">
                    <h2 className="section-title">Essential Design Resources</h2>
                    <p className="section-subtitle">Deep dive into the core principles of UI/UX design with our curated playlist.</p>
                </div>
                
                <div className="video-grid">
                    {videos.map((video, index) => (
                        <a href={video.link} key={index} target="_blank" rel="noopener noreferrer" className="video-card">
                            <div className="thumbnail-container">
                                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                                <div className="play-overlay">
                                    <div className="play-button">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="video-info">
                                <span className="video-index">Video 0{index + 1}</span>
                                <h3 className="video-title">{video.title}</h3>
                                <span className="view-link">Watch Now →</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="playlist-footer">
                    <a href={playlistLink} target="_blank" rel="noopener noreferrer" className="full-playlist-btn">
                        View Full Playlist
                        <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <div className="background-glow"></div>
        </section>
    );
};

export default Playlist;
