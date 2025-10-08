import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MyDataContext } from "../context/DataContext";

const SearchResults = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isPlaying, setIsPlaying } = useContext(MyDataContext);

  // ✅ useLocation helps us read the query string from the URL
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const handlePlayPause = (id) => {
    setIsPlaying(isPlaying === id ? null : id);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      if (!query) return;
      try {
        const res = await axios.get(`http://localhost:3000/search?q=${query}`);
        setSongs(res.data);
      } catch (err) {
        console.log("Search error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, [query]);

  if (loading)
    return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <div className="pr-5 pt-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen px-5 py-16">
      

      {songs.length > 0 ? (
        <div className="flex gap-6">
          {songs.map((data) => (
            <div
                  key={data._id}
                  className="relative w-[200px] flex-shrink-0 rounded shadow-lg bg-gray-900 p-3 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-950"
                >
                  {/* Like Button */}
                  {/* <button
                    key={data._id}
                    onClick={() => toggleFavorite(data)}
                    className="absolute right-3 top-3 text-xl"
                  >
                    {isFav(data._id) ? (
                      <i className="ri-heart-fill text-red-500"></i>
                    ) : (
                      <i className="ri-heart-line text-gray-400"></i>
                    )}
                  </button> */}

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
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No songs found 🎵</p>
      )}
    </div>
  );
};

export default SearchResults;
