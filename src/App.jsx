// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CropRecommendation from './pages/CropRecommendation';
import FertilizerSuggestion from './pages/FertilizerSuggestion';
import CropDiseasePrediction from './pages/CropDiseasePrediction';
import AreaCropSelector from './pages/AreaCropSelector';

const App = () => {
  return (
    <Router>
      <nav className="bg-green-700 text-white px-6 py-4 flex flex-wrap justify-between">
        <div className="font-bold text-lg">AgriSmart</div>
        <div className="flex gap-4 text-sm md:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/crop-recommendation" className="hover:underline">Crop</Link>
          <Link to="/fertilizer-suggestion" className="hover:underline">Fertilizer</Link>
          <Link to="/disease-prediction" className="hover:underline">Disease</Link>
          <Link to="/district-crops" className="hover:underline">Area Crops</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop-recommendation" element={<CropRecommendation />} />
        <Route path="/fertilizer-suggestion" element={<FertilizerSuggestion />} />
        <Route path="/disease-prediction" element={<CropDiseasePrediction />} />
        <Route path="/district-crops" element={<AreaCropSelector />} />
      </Routes>
    </Router>
  );
};

export default App;