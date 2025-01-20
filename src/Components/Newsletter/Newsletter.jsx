import React from 'react';
import '../../Components/Newsletter/newsletter.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Newsletter = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      Email: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .required("Email is required")
        .email("Invalid email address")
        .max(255, 'Email cannot exceed 255 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log('Form Submitted Successfully with values:', values);

      // Your NoCodeAPI URL to store the email
      const scriptURL = 'https://v1.nocodeapi.com/appointimize/google_sheets/bYeGuIiNnkpAjTKe?tabId=Sheet1';

      // Format the email data as a 2D array
      const data = [
        [values.Email] // Only storing the email
      ];
      console.log('Data sent:', data);
      
      try {
        // Sending the email data using Axios
        await axios({
          method: 'post',
          url: scriptURL,
          data: data // Sending the email data
        }).then(function (response) {
          alert('Email submitted successfully!');
        }).catch(function (error) {
          alert(`Error sending email: ${error.message}`);
        });

        resetForm(); // Reset the form after submission
      } catch (error) {
        console.error('Error sending email:', error);
      }
    },
  });

  return (
    <div className='main-news-letter'>
      <div className='wrapper'>
        <div className='news-letter'>
          <h2>Ready to get started?</h2>
          <p>Enter your email to subscribe!</p>
          <form onSubmit={formik.handleSubmit}>
            <div className='wrap-subscribe'>
              <input 
                type="email" 
                name="Email"
                placeholder='Enter your email...' 
                className='input-box'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
                style={{ marginRight: '10px' }} // Add margin to the input
              />
              <button className='get-started-btn' type="submit">Get Started</button>
              {formik.touched.Email && formik.errors.Email ? (
              <div className="error-message email-subscribe">{formik.errors.Email}</div> // Show validation error
            ) : null}
            </div>
         
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
