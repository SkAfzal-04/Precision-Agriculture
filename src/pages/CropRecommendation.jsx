// src/pages/CropRecommendation.jsx
import React, { useState } from 'react';

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorous: '',
    potassium: '',
    rainfall: '',
    state: '',
    city: ''
  });

  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecommendation('You should grow kidneybeans in your farm');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[url('https://img.freepik.com/free-photo/wheat-field-close-up_1150-7828.jpg')] bg-cover bg-center h-96 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center bg-black bg-opacity-50 p-4 rounded">
          Find out the most suitable crop to grow in your farm
        </h1>
      </header>

      <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nitrogen"
            placeholder="Nitrogen"
            value={formData.nitrogen}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="phosphorous"
            placeholder="Phosphorous"
            value={formData.phosphorous}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="potassium"
            placeholder="Potassium"
            value={formData.potassium}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="rainfall"
            placeholder="Rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Predict
          </button>
        </form>
      </div>

      {recommendation && (
        <div className="text-center text-xl font-semibold text-green-700 mb-10">
          {recommendation}
        </div>
      )}

      <footer className="text-center py-6 bg-[#262626] text-white text-sm">
        © 2021 Copyright. Precision Agriculture Using Machine Learning & IOT
        <br /> GO GREEN 🌱
      </footer>
    </div>
  );
};

export default CropRecommendation;
