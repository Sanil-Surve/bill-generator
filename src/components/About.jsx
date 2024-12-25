// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold">About Us</h1>
//       <p className="mt-2">Bill Craft simplifies billing with intuitive tools and easy PDF generation.</p>
//     </div>
//   );
// };

// export default About;

import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* About Section Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">About <span className="text-blue-800">BillCraft</span></h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          At <strong>BillCraft</strong>, we aim to simplify the billing process for businesses and individuals. 
          Our intuitive tools allow seamless bill creation, secure data management, and professional PDF generation.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm">
            <div className="text-blue-600 text-3xl mr-4">🧾</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Easy Bill Generation</h3>
              <p className="text-gray-600 text-sm">Create and manage bills effortlessly with our user-friendly interface.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm">
            <div className="text-blue-600 text-3xl mr-4">🔒</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Data Security</h3>
              <p className="text-gray-600 text-sm">Your data is encrypted and securely stored.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm">
            <div className="text-blue-600 text-3xl mr-4">📑</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">PDF Export</h3>
              <p className="text-gray-600 text-sm">Export your bills as professional-grade PDF files.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm">
            <div className="text-blue-600 text-3xl mr-4">🌟</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700">User-Friendly Design</h3>
              <p className="text-gray-600 text-sm">Experience a seamless and intuitive design interface.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm">
        © {new Date().getFullYear()} BillCraft. Simplifying Billing.
      </footer>
    </div>
  );
};

export default About;