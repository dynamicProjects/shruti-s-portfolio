import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './components/Contact.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <>
      <section className={`contact py-5 bg-light`}>
        <div className="container">
          <h1 className="text-center mb-4">Contact Me</h1>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thank You!</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your message has been sent successfully.</p>
                <p>We will get back to you as soon as possible.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
