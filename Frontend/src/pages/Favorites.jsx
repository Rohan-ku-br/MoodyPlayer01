import { useContext } from "react";
import { MyDataContext } from "../context/DataContext";

const Favorites = () => {
  const { isPlaying, setIsPlaying, favoriteSongs , toggleFavorite } =
    useContext(MyDataContext);

  const handlePlayPause = (id) => {
    setIsPlaying(isPlaying === id ? null : id);
  };

  return (
    <div className="pr-5 pt-30 text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen px-5 py-16">
      <h1 className="text-3xl font-semibold inline-block mb-6">
        Favorite Songs 💖
      </h1>

      <div className="flex overflow-x-auto hide-scrollbar py-4 gap-6">
        {favoriteSongs .length > 0 ? (
          favoriteSongs .map((data) => (
            <div
              key={data._id}
              className="relative w-[180px] flex-shrink-0 rounded shadow-lg bg-gray-900 p-3 text-white"
            >
              {/* ❤️ Like / Unlike */}
              <button
                onClick={() => toggleFavorite(data)} // ✅ pass full song
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
          <p className="text-gray-400">No favorite songs yet 😥</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
