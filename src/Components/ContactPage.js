import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactPage.css';
import { db } from './Firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const UNSPLASH_API_KEY = 'ekTIfj0yUc3xa2lXeLfn_I9A3Y9h95iHvb8Go8RNUsI';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?query=nature&count=1&client_id=${UNSPLASH_API_KEY}`;

function ContactPage() {
  const [bgImage, setBgImage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: ''
  });

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get(UNSPLASH_URL);
        setBgImage(response.data[0].urls.regular);
      } catch (error) {
        console.error('Error fetching background image from Unsplash', error);
      }
    };

    fetchBackgroundImage();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        contactNo: ''
      });
    } catch (error) {
      console.error('Error sending message: ', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="contact-content">
        <h1>GET IN TOUCH</h1>
        <p>Got a question?</p>
        <p>Fill out the form below and we will get in touch with you soon.</p>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="formContactNo">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="tel" placeholder="Enter your contact number" name="contactNo" value={formData.contactNo} onChange={handleInputChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage;
