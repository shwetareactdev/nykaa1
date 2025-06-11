import React from 'react';
import './ContactSection.css';



const ContactSection = () => {
  return (
    <section
      className="section-bg"
      style={{ backgroundImage: 'url(https://i.ibb.co/9p3Cnk9/slider-2.jpg)' }}
      data-scroll-index="7"
    >
      <div className="overlay pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="contact-info">
                <h2 className="contact-title">Have Any Questions?</h2>
                <p>
                  Lorem ipsum is a dummy text used to replace text in some areas
                  just for the purpose of an example. It can be used in
                  publishing and graphic design. The lorem ipsum text is usually
                  a section of a Latin text by Cicero with words altered, added
                  and removed to make it nonsensical.
                </p>
                <ul className="contact-info">
                  <li>
                    <div className="info-left">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="info-right">
                      <h4>+11223344550</h4>
                    </div>
                  </li>
                  <li>
                    <div className="info-left">
                      <i className="fas fa-at"></i>
                    </div>
                    <div className="info-right">
                      <h4>info@example.com</h4>
                    </div>
                  </li>
                  <li>
                    <div className="info-left">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-right">
                      <h4>1243 Stree New Chandigarh, INDIA</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="contact-form">
                <form id="contact-form" method="POST">
                  <input type="hidden" name="form-name" value="contactForm" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="first-name"
                          placeholder="Enter Your Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          rows="4"
                          name="message"
                          className="form-control"
                          id="description"
                          placeholder="Enter Your Message *"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button className="btn-big btn btn-bg">
                        Send Us <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
