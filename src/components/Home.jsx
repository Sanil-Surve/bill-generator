import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/generate");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      {/* Hero Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
          Welcome to <span className="text-blue-800">BillCraft</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Your one-stop solution for seamless and efficient bill generation.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Highlights Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {/* Highlight 1 */}
        <div className="bg-white shadow-md p-4 rounded-md text-center">
          <h3 className="font-semibold text-xl text-blue-600">Easy Billing</h3>
          <p className="text-gray-500 mt-2">
            Generate bills effortlessly with minimal steps.
          </p>
        </div>
        {/* Highlight 2 */}
        <div className="bg-white shadow-md p-4 rounded-md text-center">
          <h3 className="font-semibold text-xl text-blue-600">PDF Export</h3>
          <p className="text-gray-500 mt-2">
            Export your bills directly as professional PDFs.
          </p>
        </div>
        {/* Highlight 3 */}
        <div className="bg-white shadow-md p-4 rounded-md text-center">
          <h3 className="font-semibold text-xl text-blue-600">
            Secure & Reliable
          </h3>
          <p className="text-gray-500 mt-2">
            Your data is secure and encrypted.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm">
        © {new Date().getFullYear()} BillCraft. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
