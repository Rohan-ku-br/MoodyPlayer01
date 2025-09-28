import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-purple-700 via-purple-900 to-black flex flex-col items-center justify-center text-center gap-8">
      {/* Logo and App Name */}
      <div className="flex items-center gap-4 animate-bounce">
        <i className="ri-align-item-vertical-center-fill text-7xl"></i>
        <h1 className="text-7xl font-bold fontLogo grad-color drop-shadow-lg">
          Moody Player
        </h1>
      </div>

      {/* Quote */}
      <p className="text-xl md:text-2xl text-[#f5f5f5] fontText max-w-xl mx-4">
        "Dive into the beats, let every note move you, and turn every moment
        into a soundtrack of your life." 🎶
      </p>

      {/* Loading Indicator */}
      <div className="mt-8">
        <div className="w-16 h-16 border-4 border-t-[#5FB9BF] border-gray-300 rounded-full animate-spin mx-auto"></div>
        <p className="text-white mt-4 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
