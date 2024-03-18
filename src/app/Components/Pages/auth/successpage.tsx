import React from 'react';

const SuccessPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Login Successful!</h2>
        <p>Your Login was successful.</p>
      </div>
    </div>
  );
};

export default SuccessPage;