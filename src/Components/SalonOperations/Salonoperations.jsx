import React from "react";
import "../SalonOperations/salonoperations.css";
import Salon1 from '../../assets/homepage.jpg';
import Salon2 from '../../assets/Reportingimg.jpg';
import Salon3 from '../../assets/homepage3.jpg';
const Salonoperations = () => {
  return (
    <div className="main-salon-operations">
      <div className="salon-operations-header">
        <h6>Simplify Business Operations</h6>
        <h2>Comprehensive Business Solution.</h2>
        <div className="single-line"></div>
        <div className="salon-operations-content">
          <h6>Dashboard</h6>
          <p>
            Stay informed and in control with our customizable dashboard.
            Monitor key metrics, track appointment statuses, and access
            important insights at a glance to make informed decisions and drive
            business success.
          </p>
        </div>
        <div className="salon-operations-content">
          <h6>Staff Management</h6>
          <p>
            Empower your team with personalized profiles, shift scheduling, and
            performance tracking. Ensure seamless collaboration and efficient
            operations with our comprehensive staff management tools.
          </p>
        </div>
        <div className="salon-operations-content">
          <h6>Reporting and Analytics</h6>
          <p>
            Access detailed reports and analytics to track business performance,
            make data-driven decisions, and improve business outcomes. Gain
            insights into booking trends, revenue streams, and client
            preferences to drive growth and success.
          </p>
        </div>
        <div className="salon-operations-content">
          <h6>Customizable Settings</h6>
          <p>
            Tailor the platform to suit your business's unique needs with
            customizable settings for services, pricing, and staff roles. Create
            a personalized experience for your team and clients while
            maintaining control over every aspect of your business's operations.
          </p>
        </div>
      </div>
      <div className="salon-operation-img-wrap">
        <img
          src={Salon1}
          alt="salon-operation-img"
          className="salon-operation-img"
        />
        <div className="operation-img-wrap">
          <img
            src={Salon2}
            alt="subcard1"
            className="operation-img"
          />
          <img
            src={Salon3}
            alt="subcard1"
            className="operation-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Salonoperations;
