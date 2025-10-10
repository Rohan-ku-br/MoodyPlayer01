import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyDataContext } from "../context/DataContext";

const Home = () => {
  const { cards, Fav, toggleFavorite, handlePlayPause, isPlaying, currentSong } =
    useContext(MyDataContext);

  const isFav = (songId) => Fav.includes(String(songId));

  const categories = {
    "Top Songs": cards.filter((song) => song.type === "top"),
    "Hindi Songs": cards.filter((song) => song.type === "hindi"),
    "English Songs": cards.filter((song) => song.type === "english"),
    "Old Songs": cards.filter((song) => song.type === "Old songs"),
  };

  return (
    <div className="pr-5 pt-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen px-5 pb-1 ">
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-12">
          <NavLink className="text-2xl font-bold text-white mb-4">
            {category}
          </NavLink>

          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-6">
            {categories[category].length > 0 ? (
              categories[category].map((data) => (
                <div
                  key={data._id}
                  onClick={() => handlePlayPause(data)}
                  className="relative w-[200px] flex-shrink-0 rounded shadow-lg bg-gray-900 p-3 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-950 cursor-pointer"
                >
                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(data);
                    }}
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

                  {currentSong?._id === data._id && isPlaying && (
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
      ))}
    </div>
  );
};

export default Home;
