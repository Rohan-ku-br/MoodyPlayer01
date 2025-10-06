import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyDataContext } from "../context/DataContext";

const Home = () => {
  const { cards, Fav, toggleFavorite, isPlaying, setIsPlaying } =
    useContext(MyDataContext);

  const handlePlayPause = (id) => {
    setIsPlaying(isPlaying === id ? null : id);
  };

   const isFav = (songId) => Fav.includes(String(songId));


  // ✅ Group by type
  const categories = {
    "Top Songs": cards.filter((song) => song.type === "top"),
    "Hindi Songs": cards.filter((song) => song.type === "hindi"),
    "English Songs": cards.filter((song) => song.type === "english"),
    "Old songs": cards.filter((song) => song.type === "Old songs"),
  };

  return (
    <div className="pr-5 pt-30 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen px-5 py-16">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-12">
          <NavLink className="text-2xl font-bold text-white mb-4">
            {category}
          </NavLink>

          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-6 ">
            {categories[category].length > 0 ? (
              categories[category].map((data) => (
                <div
                  key={data._id}
                  className="relative w-[200px] flex-shrink-0 rounded shadow-lg bg-gray-900 p-3 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-950"
                >
                  {/* Like Button */}
                  <button
                    key={data._id}
                    onClick={() => toggleFavorite(data)}
                    className="absolute right-3 top-3 text-xl"
                  >
                    {isFav(data._id) ? (
                      <i className="ri-heart-fill text-red-500"></i>
                    ) : (
                      <i className="ri-heart-line text-gray-400"></i>
                    )}
                  </button>

                  {/* Song Image */}
                  <img
                    className="w-full h-[175px] object-cover rounded bg-gray-100"
                    src={data.image}
                  />

                  {/* Song Info */}
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold truncate">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-400 truncate">
                      {data.artist}
                    </p>
                  </div>

                  {/* Play / Pause */}
                  <div className="mt-2 flex items-center gap-5">
                    {isPlaying === data._id && (
                      <audio
                        className="hidden"
                        src={data.audio}
                        controls
                        autoPlay
                      ></audio>
                    )}
                    <button onClick={() => handlePlayPause(data._id)}>
                      {isPlaying === data._id ? (
                        <i className="ri-pause-large-line text-2xl"></i>
                      ) : (
                        <i className="ri-play-circle-fill text-2xl"></i>
                      )}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No songs available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
