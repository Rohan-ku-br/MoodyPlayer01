import { useContext } from "react";
import { MyDataContext } from "../context/DataContext";

const Favorites = () => {
  const {
    isPlaying,
    currentSong,
    handlePlayPause,
    toggleFavorite,
    favoriteSongs,
  } = useContext(MyDataContext);

  return (
    <div className="pr-5 pt-20 text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen px-5 py-16">
      <h1 className="text-3xl font-semibold inline-block mb-6">
        Favorite Songs 🎶
      </h1>

      <div className="flex overflow-x-auto hide-scrollbar py-4 gap-6">
        {favoriteSongs.length > 0 ? (
          favoriteSongs.map((data) => (
            <div
              key={data._id}
              onClick={() => handlePlayPause(data)}
              className="relative w-[180px] flex-shrink-0 rounded shadow-lg bg-gray-900 p-3 text-white hover:scale-105 transition-transform cursor-pointer"
            >
              {/* ❤️ Like / Unlike */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(data);
                }}
                className="absolute right-3 top-3 text-xl"
              >
                <i className="ri-heart-fill text-red-500"></i>
              </button>

              <img
                className="w-full h-[175px] object-cover rounded bg-gray-100"
                src={data.image}
              />

              <div className="mt-2">
                <h3 className="text-lg font-semibold truncate">{data.title}</h3>
                <p className="text-sm text-gray-400 truncate">{data.artist}</p>
              </div>

              {/* Show overlay when song is playing */}
              {currentSong?._id === data._id && isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <i className="ri-pause-large-line text-3xl text-white"></i>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400">No favorite songs yet 😥</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
