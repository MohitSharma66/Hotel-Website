import React, { useState, useEffect } from 'react';
import './RegistrationPage.css';
import { db } from './Firebase.js';
import { collection, addDoc } from 'firebase/firestore';


async function fetchUnsplashImage() {
  const accessKey = 'ekTIfj0yUc3xa2lXeLfn_I9A3Y9h95iHvb8Go8RNUsI';
  const response = await fetch(`https://api.unsplash.com/photos/random?query=hotel&client_id=${accessKey}`);
  const data = await response.json();
  return data.urls.regular;
}

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    checkInDateTime: '',
    checkOutDateTime: '',
    roomPreference: 'Standard',
    noOfRooms: '1',
    noOfOccupants: '1'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      checkin: new Date(formData.checkin),
      checkout: new Date(formData.checkout),
      roomsNeeded: parseInt(formData.roomsNeeded, 10),
      roomOccupants: parseInt(formData.roomOccupants, 10),
      phone: formData.phone.toString()
    };

    try {
      await addDoc(collection(db, 'registrations'), formattedData);
      alert('Reservation successful!');
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        roomPreference: 'single',
        roomsNeeded: '1',
        roomOccupants: '1'
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to reserve. Please try again.');
    }
  };
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      const imageUrl = await fetchUnsplashImage();
      setBackgroundImage(imageUrl);
    };
    getImage();
  }, []);

  return (
    <div className="registration-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="form-container">
        <h1>Hotel Reservation Form</h1>
        <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="checkin">Check-in Date and Time</label>
      <input
        type="datetime-local"
        id="checkin"
        name="checkin"
        value={formData.checkin}
        onChange={handleChange}
        required
      />

      <label htmlFor="checkout">Check-out Date and Time</label>
      <input
        type="datetime-local"
        id="checkout"
        name="checkout"
        value={formData.checkout}
        onChange={handleChange}
        required
      />

      <label htmlFor="room-preference">Room Preference</label>
      <select
        id="room-preference"
        name="roomPreference"
        value={formData.roomPreference}
        onChange={handleChange}
      >
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>

      <label htmlFor="rooms-needed">No. of Rooms Needed</label>
      <select
        id="rooms-needed"
        name="roomsNeeded"
        value={formData.roomsNeeded}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3+">3+</option>
      </select>

      <label htmlFor="room-occupants">No. of Room Occupants</label>
      <select
        id="room-occupants"
        name="roomOccupants"
        value={formData.roomOccupants}
        onChange={handleChange}
      >
        <option value="1">1 person</option>
        <option value="2">2 persons</option>
        <option value="3">3 persons</option>
        <option value="4">4 persons</option>
      </select>

      <button type="submit">Reserve</button>
    </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
