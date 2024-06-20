import React from "react";
import Contact from "../Components/Contact/Contact";
import '../Components/Contact/contact.css';

const Pricing = () => {
  return (
    <>
      <div className="contactpage-bg">
      <div className="overlay-bg1"></div>
      <div className="contact-text">
        <h2>Contact Us for Custom Pricing</h2>
        <p>At Appointimize, we offer personalized pricing plans tailored to your business needs. Whether you run a small salon or a large wellness center, we have the perfect solution for you.</p>
        {/* <h3>Why Contact Us?</h3>
        <p><span className="contact-sub-heading">Personalized Solutions:</span> Custom pricing for your specific requirements.<br/>
        <span className="contact-sub-heading"> Expert Consultation:</span> Get the best solutions from our team.<br/>
        <span className="contact-sub-heading"> Flexible Packages:</span> Choose a plan that grows with your business. </p> */}
          <h3>Get in Touch:</h3>
        <p>Fill out the form below, and we’ll get back to you within 24 hours. </p>
        <h4>Or reach us directly at:</h4>
        <h4>Email: info@appointimize.com </h4>
        <h4>Phone: +91 96505 83832</h4>
        <h4>Office Hours: Monday to Friday, 9:00 AM - 6:00 PM</h4>
      </div>
      <div className="contact-page">
        <Contact />
        </div>
      </div>
    </>
  );
};

export default Pricing;
