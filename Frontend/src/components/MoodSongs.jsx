import { useContext, useState } from "react";
import { MyDataContext } from "../context/DataContext";
const MoodSongs = () => {
  const { Songs } = useContext(MyDataContext);

  // default empty array
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isPlaying == index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };

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
              className="w-[180px] rounded shadow-lg bg-gray-900 p-3 text-white"
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
              <div className="mt-2 flex items-center gap-5">
                {isPlaying === index && (
                  <audio
                    className="hidden"
                    src={song.audio}
                    controls
                    autoPlay
                  ></audio>
                )}

                <button onClick={() => handlePlayPause(index)}>
                  {isPlaying === index ? (
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
  );
};

export default MoodSongs;
