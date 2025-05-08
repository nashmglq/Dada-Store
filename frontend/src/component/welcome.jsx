import React from 'react';

export const Welcome = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white/80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-neutral-900">Welcome to Dada's Store</h1>
        <p className="text-lg font-normal text-neutral-800 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Welcome;