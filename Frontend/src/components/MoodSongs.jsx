import { useContext, useState } from "react";
import { MyDataContext } from "../context/DataContext";
const MoodSongs = () => {
  const { Songs, isPlaying, currentSong, handlePlayPause } =
    useContext(MyDataContext);

  return (
    <div className="px-32">
      {/* Heading */}
      <h1 className="text-4xl text-white mb-6">Recommended Tracks</h1>

      {/* Songs container */}
      <div className="flex flex-wrap gap-6">
        {Songs.length > 0 ? (
          Songs.map((song, index) => (
            <div
              key={index}
              onClick={() => {
                handlePlayPause(song);
              }}
              className="relative w-[180px] rounded shadow-lg bg-gray-900 p-3 text-white hover:scale-105 transition-transform cursor-pointer"
            >
              {/* Song Image */}
              <img
                className="w-full h-[175px] object-cover rounded bg-gray-100"
                src={song.image}
                alt={song.title}
              />

              {/* Song Info */}
              <div className="mt-2">
                <h3 className="text-lg font-semibold truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>

              {/* Audio Controls */}
              {currentSong?._id === song._id && isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <i className="ri-pause-large-line text-3xl text-white"></i>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No songs available</p>
        )}
      </div>
    </div>
  );
};

export default MoodSongs;
