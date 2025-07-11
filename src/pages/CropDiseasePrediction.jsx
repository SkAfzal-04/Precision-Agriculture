// src/pages/CropDiseasePrediction.jsx
import React, { useState } from 'react';

const CropDiseasePrediction = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy prediction result
    setResult({
      name: 'Early Blight',
      cause: 'Caused by fungus Alternaria solani',
      prevention:
        'Use disease-free seed, crop rotation, remove infected debris, apply appropriate fungicides.'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[url('https://img.freepik.com/free-photo/leaf-with-plant-disease_23-2148827831.jpg')] bg-cover bg-center h-72 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center bg-black bg-opacity-50 p-4 rounded">
          Upload a Leaf Image to Predict Crop Disease
        </h1>
      </header>

      <main className="max-w-xl mx-auto py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded shadow-md space-y-4 text-center"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block mx-auto mb-4"
            required
          />

          {preview && (
            <img
              src={preview}
              alt="Leaf Preview"
              className="w-48 h-48 object-cover mx-auto rounded border"
            />
          )}

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mt-4"
          >
            Predict Disease
          </button>
        </form>

        {result && (
          <div className="mt-10 bg-green-50 p-6 rounded shadow-md text-green-800 space-y-2">
            <h2 className="text-2xl font-semibold text-center">Disease Details</h2>
            <p><span className="font-bold">Name:</span> {result.name}</p>
            <p><span className="font-bold">Cause:</span> {result.cause}</p>
            <p><span className="font-bold">Prevention:</span> {result.prevention}</p>
          </div>
        )}
      </main>

      <footer className="text-center py-6 bg-[#262626] text-white text-sm mt-10">
        © 2021 Copyright. Precision Agriculture Using Machine Learning & IOT
        <br /> GO GREEN 🌱
      </footer>
    </div>
  );
};

export default CropDiseasePrediction;
