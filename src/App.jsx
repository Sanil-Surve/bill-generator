// import React, { Suspense } from "react";

// // Lazy load the BillGenerator component
// const BillGenerator = React.lazy(() => import("./components/BillGenerator"));

// // Loader Component
// const Loader = () => (
//   <div className="h-screen flex items-center justify-center">
//     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
//   </div>
// );

// const App = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <BillGenerator />
//     </Suspense>
//   );
// };

// export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy Loaded Components
const BillGenerator = lazy(() => import('./components/BillGenerator'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<BillGenerator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
