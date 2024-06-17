import React from "react";
import '../../Components/Contact/contact.css';
import { Form, Input } from "antd";
import axios from 'axios';

const Contact = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log('Form Submitted Successfully with values:', values);

    const scriptURL = 'https://v1.nocodeapi.com/appointimize/google_sheets/bYeGuIiNnkpAjTKe?tabId=Sheet1';

    // Format the data as a 2D array
    const data = [
      [values.companyname, values.mobileNumber,values.Email,values.businessname,values.message]
    ];
    console.log('Data sent:', data);
    const requestBody = {
      data
    };

    console.log('Request Body:', JSON.stringify(requestBody));

    try {
     
      axios({
                method: 'post',
                url: 'https://v1.nocodeapi.com/appointimize/google_sheets/bYeGuIiNnkpAjTKe?tabId=Sheet1', 
                params: {},
                data: data
            }).then(function (response) {
                alert('Message sent successfully!');
            }).catch(function (error) {
                alert(`Error sending message: ${error.message}`);
            })
      
      form.resetFields();
    } catch (error) {
      console.error('Error sending message:', error);
      
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form Submission Failed with error:', errorInfo);
  };

  return (
    <div className="main-contact">
    <div className="contactbg"></div>
      <div className="wrap-contact">
        <div className="contact">
          <Form
            form={form}
            name="messageForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <p className="form-heading">
              <span className="form-rat-text">CONTACT US</span>
            </p>
            <Form.Item
              name="companyname"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Your Name" className="input-box" />
            </Form.Item>
            <Form.Item
              name="mobileNumber"
              rules={[
                { required: true, message: "Required" },
                { pattern: /^[0-9]{10}$/, message: "Invalid phone number" },
              ]}
            >
              <Input placeholder="Your Mobile Number" className="input-box" />
            </Form.Item>
            <Form.Item
              name="Email"
              rules={[{ required: true, message: "Required" },
              { type: 'email', message: 'Invalid email address' }]}
            >
              <Input placeholder="Your Email Address" className="input-box" />
            </Form.Item>
            <Form.Item
              name="businessname"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Your Business Name" className="input-box" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: 'Required' },
                { max: 255, message: 'Message cannot exceed 255 characters!' },
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Tell us about your business needs."
                className="input-box"
              />
            </Form.Item>
            <div className="submit-btn-wrap">
              <button className="submit-btn" type="submit">SUBMIT</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
