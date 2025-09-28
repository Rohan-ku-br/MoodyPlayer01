import { useState } from "react";
const MoodSongs = ({ Songs = [] }) => {
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
    <div className="pl-32 pr-32 ">
      <h1 className="text-4xl  text-gray-950 mb-4">Recommended Tracks</h1>
      {Songs.length > 0 ? (
        Songs.map((song, index) => (
          <div
            key={index}
            className="bg-gray-100 mb-1 flex items-center justify-between pl-2 pr-2 pb-1 rounded"
          >
            <div className="text-xl">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="text-xl flex items-center gap-5">
              {isPlaying === index && (
                <audio
                  className="hidden"
                  src={song.audio}
                  controls
                  autoPlay={isPlaying === index}
                ></audio>
              )}

              <button
                onClick={() => {
                  handlePlayPause(index);
                }}
              >
                {isPlaying === index ? (
                  <i className="ri-pause-large-line"></i>
                ) : (
                  <i className="ri-play-circle-fill"></i>
                )}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 ">No songs available</p>
      )}
    </div>
  );
};

export default MoodSongs;
