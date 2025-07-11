// src/pages/AreaCropSelector.jsx
import React, { useState } from 'react';
import cropData from '../data/cropData';

const AreaCropSelector = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [districts, setDistricts] = useState([]);
  const [crops, setCrops] = useState([]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict('');
    setCrops([]);
    setDistricts(Object.keys(cropData[state] || {}));
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setCrops(cropData[selectedState][district] || []);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[url('https://img.freepik.com/free-photo/farmland-with-young-corn-plantations-during-sunset_181624-45567.jpg')] bg-cover bg-center h-72 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Discover Crops Based on Your Location
        </h1>
      </header>

      <div className="max-w-xl mx-auto mt-10 p-4">
        <label className="block font-medium text-gray-700 mb-2">Select State</label>
        <select
          onChange={handleStateChange}
          className="w-full border border-gray-300 p-2 rounded mb-6"
          defaultValue=""
        >
          <option value="" disabled>
            -- Choose a state --
          </option>
          {Object.keys(cropData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {districts.length > 0 && (
          <>
            <label className="block font-medium text-gray-700 mb-2">Select District</label>
            <select
              onChange={handleDistrictChange}
              className="w-full border border-gray-300 p-2 rounded mb-6"
              defaultValue=""
            >
              <option value="" disabled>
                -- Choose a district --
              </option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </>
        )}

        {selectedDistrict && (
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              Crops grown in {selectedDistrict}, {selectedState}:
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {crops.map((crop, index) => (
                <li key={index}>{crop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="text-center py-6 bg-[#262626] text-white text-sm mt-10">
        © 2021 Copyright. Precision Agriculture Using Machine Learning & IOT
        <br /> GO GREEN 🌱
      </footer>
    </div>
  );
};

export default AreaCropSelector;