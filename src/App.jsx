import React, { Suspense } from "react";

// Lazy load the BillGenerator component
const BillGenerator = React.lazy(() => import("./components/BillGenerator"));

// Loader Component
const Loader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BillGenerator />
    </Suspense>
  );
};

export default App;
