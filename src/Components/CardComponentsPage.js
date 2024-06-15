// CardComponentsPage.js

import React, { useState, useEffect } from 'react';
import './CardComponentsPage.css';
import { useNavigate } from 'react-router-dom';

async function fetchUnsplashImage() {
  const accessKey = 'ekTIfj0yUc3xa2lXeLfn_I9A3Y9h95iHvb8Go8RNUsI';
  const response = await fetch(`https://api.unsplash.com/photos/random?query=hotel&client_id=${accessKey}`);
  const data = await response.json();
  return data.urls.regular;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPrice(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomRating(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

async function generateRandomHotel() {
  const hotelNames = [
    "Grand Plaza Hotel", "Ocean View Resort", "Mountain Escape Lodge",
    "City Center Inn", "Luxury Suites", "Sunset Beach Hotel",
    "Elegant Palace", "Comfort Stay", "Royal Garden Hotel", "Tranquil Retreat"
  ];

  const hotelLocations = [
    "New York, USA", "Paris, France", "Tokyo, Japan",
    "Sydney, Australia", "Rome, Italy", "Cairo, Egypt",
    "Cape Town, South Africa", "Rio de Janeiro, Brazil", "Toronto, Canada", "London, UK"
  ];

  const hotel = {
    name: getRandomElement(hotelNames),
    price: getRandomPrice(50, 500),
    image_url: await fetchUnsplashImage(),
    location: getRandomElement(hotelLocations),
    rating: getRandomRating(1, 5),
    reviews: Math.floor(Math.random() * 491) + 10
  };

  return hotel;
}

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Prevents the card click event from being triggered
    navigate('/registration');
  };

  const handleDivClick = () => {
    navigate('/registration');
  };

  return (
    <div className="hotel-card" onClick={handleDivClick}>
      <img src={hotel.image_url} alt={hotel.name} />
      <div className="hotel-card-content">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <div className="hotel-card-rating">
          <span>Rating: {hotel.rating} stars</span>
          <span>({hotel.reviews} Reviews)</span>
          <button onClick={handleButtonClick} className="book-button">Book Now!</button>
        </div>
        <p>Price: ${hotel.price}</p>
      </div>
    </div>
  );
}

function CardComponentsPage() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMoreHotels = async () => {
    setLoading(true);
    const newHotels = [];
    for (let i = 0; i < 6; i++) {
      const hotel = await generateRandomHotel();
      newHotels.push(hotel);
    }
    setHotels(prevHotels => [...prevHotels, ...newHotels]);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreHotels();
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        loadMoreHotels();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="card-components-page">
      <div className="card-container">
        {hotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default CardComponentsPage;
