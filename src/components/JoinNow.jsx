import React from "react";

const JoinNow = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
      
      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-md">
        
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-4">
          Join Us
        </h1>
        
        <p className="text-center text-gray-300 mb-8">
          Become a member to enjoy exclusive benefits!
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
          />

          <input
            type="text"
            placeholder="Enter your age"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
          />

          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm your password"
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:ring-2 focus:ring-red-600 outline-none"
          />

          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" className="w-4 h-4" />
            I agree to the terms and conditions
          </label>

          <button className="mt-4 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold transition text-lg">
            Join Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default JoinNow;
