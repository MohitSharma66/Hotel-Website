// AboutPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css';

const UNSPLASH_API_KEY = 'ekTIfj0yUc3xa2lXeLfn_I9A3Y9h95iHvb8Go8RNUsI';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?query=architecture&count=1&client_id=${UNSPLASH_API_KEY}`;

function AboutPage() {
  const [bgImage, setBgImage] = useState('');

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

  return (
    <div className="about-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">Unveil the splendor of The ABC Hotel, where luxury intertwines seamlessly with comfort. From opulent accommodations to exquisite dining options, our hotel offers a haven of indulgence in the heart of the bustling city. Immerse yourself in unparalleled hospitality and personalized service, tailored to meet the needs of discerning travelers. Whether you're seeking a tranquil retreat or an immersive urban experience, The ABC Hotel promises a memorable stay, where every moment is crafted to exceed your expectations. Experience the epitome of sophistication and relaxation, where every detail is meticulously curated to ensure a truly unforgettable journey.</p>
      </div>
    </div>
  );
}

export default AboutPage;
