import React from 'react';
import './components/Resume.css';
import myResume from './assets/Shruti_Shrivastavs_Resume.pdf';

const Resume = () => {
    return (
      <div className="resume-container">
        <h1>My Resume</h1>
        <p>
          Download my resume to learn more about my professional background and skills.
        </p>
        <a href={myResume} download className="btn btn-primary">
          Download Resume
        </a>
      </div>
    );
  };
  
  export default Resume;
