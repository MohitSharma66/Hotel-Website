// src/MainPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';

const UNSPLASH_API_KEY = 'ekTIfj0yUc3xa2lXeLfn_I9A3Y9h95iHvb8Go8RNUsI';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random?query=hotel&count=3&client_id=${UNSPLASH_API_KEY}`;

function MainPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(UNSPLASH_URL);
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images from Unsplash', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.urls.regular}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{image.description || 'Hotel Image'}</h3>
              <p>{image.alt_description || 'Beautiful view of a hotel'}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MainPage;
