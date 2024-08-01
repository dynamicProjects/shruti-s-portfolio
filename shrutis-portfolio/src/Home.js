import React from 'react';
import profilePic from './assets/images/shruti-profilepic.JPG';
import './components/Home.css';

const Home = () => {
    return (
      <header className="home">
        <div className="container text-center">
          <img src={profilePic} alt="Shruti Shrivastava" className="profile-pic" />
          <h1>Hi there, I'm Shruti</h1>
          <p className="lead">
            7+ years of experience in MEAN Stack with full SDLC.
          </p>
          <p className="bio">
            Proficient in developing web applications using Angular,React, TypeScript, JavaScript, and more. Strong skills in front-end development, agile methodologies, and enterprise application design. Experienced in HCM, BOT, Immigration, HR, and financial services.
          </p>
        </div>
      </header>
    );
  };
  
  export default Home;