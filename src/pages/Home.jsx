import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[url('https://img.freepik.com/free-photo/green-leaves-nature-background_53876-143120.jpg')] bg-cover bg-center h-96 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center bg-black bg-opacity-50 p-4 rounded">
          Precision Agriculture Using Machine Learning
        </h1>
      </header>

      <section className="p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700">
          Improving Agriculture, Improving Lives, Cultivating Crops To Make Farmers Increase Profit.
          We assist with machine learning and deep learning techniques to help you track the health of your crops,
          predict their diseases, and recommend optimal fertilizer and crop planning.
        </p>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[
            {
              title: 'Crop',
              desc: 'Recommendation of best type of crops to be cultivated based on conditions.',
              btn: 'View Details',
              img: 'https://img.freepik.com/free-photo/farm-soil-with-young-plant_1150-17327.jpg'
            },
            {
              title: 'Fertilizer',
              desc: 'Recommendation for the type of fertilizer best suited for your soil.',
              btn: 'View Details',
              img: 'https://img.freepik.com/free-photo/farmer-checking-soil_53876-128281.jpg'
            },
            {
              title: 'Crop Disease',
              desc: 'Predicting the possibility of crop disease from image.',
              btn: 'View Details',
              img: 'https://img.freepik.com/free-photo/sick-leaves-with-pests_23-2148827834.jpg'
            }
          ].map(({ title, desc, btn, img }) => (
            <div key={title} className="bg-white rounded shadow-md overflow-hidden">
              <img src={img} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4">{desc}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">{btn}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 bg-[#262626] text-white text-sm">
        © 2021 Copyright. Precision Agriculture Using Machine Learning & IOT
        <br /> GO GREEN 🌱
      </footer>
    </div>
  );
};

export default Home;