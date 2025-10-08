import { useState } from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedoAlt,
  FaVolumeUp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PlayerBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(30);

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#181818] text-white border-t border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* 🎵 Now Playing Section */}
        <div className="flex items-center space-x-3 w-full md:w-1/3 mb-3 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&auto=format&fit=crop"
            alt="cover"
            className="w-14 h-14 rounded-md object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">Blinding Lights</h3>
            <p className="text-xs text-gray-400">The Weeknd</p>
          </div>
        </div>

        {/* ⏯️ Player Controls */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex items-center space-x-5 mb-1">
            <FaRandom className="text-gray-400 hover:text-white cursor-pointer hidden sm:block" />
            <FaStepBackward className="text-gray-300 hover:text-white cursor-pointer" />

            {isPlaying ? (
              <FaPauseCircle
                className="text-4xl hover:text-green-500 cursor-pointer"
                onClick={() => setIsPlaying(false)}
              />
            ) : (
              <FaPlayCircle
                className="text-4xl hover:text-green-500 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              />
            )}

            <FaStepForward className="text-gray-300 hover:text-white cursor-pointer" />
            <FaRedoAlt className="text-gray-400 hover:text-white cursor-pointer hidden sm:block" />
          </div>

          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full px-2">
            <span className="text-xs text-gray-400">1:12</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              className="w-full accent-green-500 h-1 cursor-pointer"
            />
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        {/* 🔊 Volume + Nav Links */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/3 mt-3 md:mt-0 space-x-4">
          <div className="hidden sm:flex space-x-5 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-green-400 transition-colors ${
                  isActive ? "text-green-400" : "text-gray-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                `hover:text-green-400 transition-colors ${
                  isActive ? "text-green-400" : "text-gray-300"
                }`
              }
            >
              Library
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `hover:text-green-400 transition-colors ${
                  isActive ? "text-green-400" : "text-gray-300"
                }`
              }
            >
              Favorites
            </NavLink>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <FaVolumeUp className="text-gray-300" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-20 accent-green-500 h-1 cursor-pointer hidden sm:block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
