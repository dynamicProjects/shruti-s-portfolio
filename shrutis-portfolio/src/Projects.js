import React from 'react';
import './components/Projects.css';
import dataLake from './assets/images/delta-lake-logo.webp';
import amazonImmigration from './assets/images/amazon-immigration-services.png';
import fca from './assets/images/fca.png';

const Projects = () => {
    return (
      <section className="projects py-5">
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card shadow-sm">
                <img src={dataLake} className="card-img-top project-img" alt="Enterprise Data Lake" />
                <div className="card-body">
                  <h5 className="card-title">Enterprise Data Lake</h5>
                  <p className="card-text">Developed quality technical solutions using React, Angular16, Node, HTML, and CSS for John Deere, ensuring business needs and deadlines were met. Conducted regression and performance tests, and integrated new technologies for enhanced efficiency.</p>
                  <a href="live-demo-url" className="btn btn-primary">Live Demo</a>
                  <a href="github-url" className="btn btn-secondary ms-2">GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card shadow-sm">
                <img src={amazonImmigration} className="card-img-top project-img" alt="Amazon Immigration Management System" />
                <div className="card-body">
                  <h5 className="card-title">Amazon Immigration Management System</h5>
                  <p className="card-text">Designed and developed applications using Angular12, Salesforce LWC, HTML, CSS, JavaScript, and TypeScript. Simplified immigration processes for Amazon's global workforce and managed updates to reflect changes in policies and enhancements.</p>
                  <a href="live-demo-url" className="btn btn-primary">Live Demo</a>
                  <a href="github-url" className="btn btn-secondary ms-2">GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card shadow-sm">
                <img src={fca} className="card-img-top project-img" alt="FCA BOT" />
                <div className="card-body">
                  <h5 className="card-title">FCA BOT</h5>
                  <p className="card-text">Developed an intelligent chatbot using ReactJS, HTML, CSS, and TypeScript to assist in compliance with FCA regulations. Conducted extensive research and analysis, and implemented complex React applications to meet project requirements.</p>
                  <a href="live-demo-url" className="btn btn-primary">Live Demo</a>
                  <a href="https://github.com/dynamicProjects/m5-w3-d2-demo.git" className="btn btn-secondary ms-2">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Projects;
