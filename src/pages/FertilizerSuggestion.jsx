// src/pages/FertilizerSuggestion.jsx
import React, { useState } from 'react';

const FertilizerSuggestion = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    crop: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy result logic
    setResult(
      'The K value of your soil is low. Please consider the following suggestions:\n\n' +
        '1. Mix in muriate of potash or sulphate of potash\n' +
        '2. Try leaf mold or seaweed\n' +
        '3. Try hardwood ashes\n' +
        '4. Bury banana peels an inch below the soil’s surface\n' +
        '5. Use Potash fertilizers since they contain high values potassium.'
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[url('https://img.freepik.com/free-photo/closeup-shot-bright-green-grass-growing-field_181624-4584.jpg')] bg-cover bg-center h-96 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold bg-black bg-opacity-40 p-4 rounded">
          Get informed advice based on fertilizer based on soil
        </h1>
      </header>

      <main className="max-w-2xl mx-auto py-10 px-4">
        {!result ? (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-6 rounded shadow-md space-y-4"
          >
            <input
              type="number"
              name="nitrogen"
              placeholder="Nitrogen"
              className="w-full p-2 border rounded"
              value={formData.nitrogen}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phosphorus"
              placeholder="Phosphorus"
              className="w-full p-2 border rounded"
              value={formData.phosphorus}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="potassium"
              placeholder="Potassium"
              className="w-full p-2 border rounded"
              value={formData.potassium}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="crop"
              placeholder="Crop Name To Grow"
              className="w-full p-2 border rounded"
              value={formData.crop}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Predict
            </button>
          </form>
        ) : (
          <div className="bg-green-50 p-6 rounded shadow-md text-green-800 whitespace-pre-line">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Find out the which fertilizer to use
            </h2>
            <p className="text-sm leading-relaxed">{result}</p>
          </div>
        )}
      </main>

      <footer className="text-center py-6 bg-[#262626] text-white text-sm">
        © 2021 Copyright. Precision Agriculture Using Machine Learning & IOT
        <br /> GO GREEN 🌱
      </footer>
    </div>
  );
};

export default FertilizerSuggestion;
