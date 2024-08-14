import React from 'react';
import profilePic from './assets/images/shruti-profilepic.JPG';
import './components/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <div className="text-content">
                        <h1>Hi there, I'm Shruti</h1>
                        <h2>A web developer.</h2>
                        <p className="bio">
                            7+ years of experience in MEAN Stack with full SDLC.
                        </p>
                        <p className="bio">
                            Proficient in developing web applications using Angular, React, TypeScript, JavaScript, and more. Strong skills in front-end development, agile methodologies, and enterprise application design. Experienced in HCM, BOT, Immigration, HR, and financial services.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                    <div className="image-content">
                        <img src={profilePic} alt="Jane Doe" className="profile-pic" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
