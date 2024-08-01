import React from 'react';
import './components/Contact.css';

const Contact = () => {
    return (
      <section className="contact py-5 bg-light">
        <div className="container">
          <h1>Contact Me</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea className="form-control" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
