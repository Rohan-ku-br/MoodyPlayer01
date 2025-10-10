import { useContext, useEffect, useRef, useState } from "react";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedoAlt,
  FaVolumeUp,
} from "react-icons/fa";
import { MyDataContext } from "../context/DataContext";

const PlayerBar = () => {
  const {
    cards,
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
  } = useContext(MyDataContext);

  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  const audioRef = useRef(null);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  // Update progress bar
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 0;
      setProgress((current / duration) * 100 || 0);
    }
  };

  // Seek song
  const handleSeek = (e) => {
    const value = e.target.value;
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      audioRef.current.currentTime = (value / 100) * duration;
      setProgress(value);
    }
  };

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Next / Previous logic
  const handleNext = () => {
    if (!cards.length || !currentSong) return;
    const currentIndex = cards.findIndex((c) => c._id === currentSong._id);
    let nextIndex;

    if (isShuffling) {
      nextIndex = Math.floor(Math.random() * cards.length);
    } else {
      nextIndex = (currentIndex + 1) % cards.length;
    }

    setCurrentSong(cards[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    if (!cards.length || !currentSong) return;
    const currentIndex = cards.findIndex((c) => c._id === currentSong._id);
    let prevIndex;

    if (isShuffling) {
      prevIndex = Math.floor(Math.random() * cards.length);
    } else {
      prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    }

    setCurrentSong(cards[prevIndex]);
    setIsPlaying(true);
  };

  // Handle song end (repeat or next)
  const handleSongEnd = () => {
    if (isRepeating) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNext();
    }
  };

  if (!currentSong) return null; // hide until a song is selected

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/35 backdrop-blur-md border-b border-white/30 z-50 text-white border-t ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* 🎵 Song Info */}
        <div className="flex items-center space-x-3 w-full md:w-1/3 mb-3 md:mb-0">
          <img
            src={currentSong.image}
            alt="cover"
            className="w-14 h-14 rounded-md object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{currentSong.title}</h3>
            <p className="text-xs text-gray-400">{currentSong.artist}</p>
          </div>
        </div>

        {/* 🎧 Controls */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex items-center space-x-5 mb-1">
            {/* Shuffle */}
            <FaRandom
              onClick={() => setIsShuffling(!isShuffling)}
              className={`cursor-pointer text-xl ${
                isShuffling ? "text-green-500" : "text-gray-400 hover:text-white"
              }`}
            />

            {/* Prev */}
            <FaStepBackward
              onClick={handlePrev}
              className="text-gray-300 hover:text-white cursor-pointer"
            />

            {/* Play / Pause */}
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

            {/* Next */}
            <FaStepForward
              onClick={handleNext}
              className="text-gray-300 hover:text-white cursor-pointer"
            />

            {/* Repeat */}
            <FaRedoAlt
              onClick={() => setIsRepeating(!isRepeating)}
              className={`cursor-pointer text-xl ${
                isRepeating
                  ? "text-green-500"
                  : "text-gray-400 hover:text-white"
              }`}
            />
          </div>

          {/* ⏱ Progress Bar */}
          <div className="flex items-center space-x-2 w-full px-2">
            <span className="text-xs text-gray-400">
              {audioRef.current
                ? Math.floor(audioRef.current.currentTime / 60) +
                  ":" +
                  String(Math.floor(audioRef.current.currentTime % 60)).padStart(2, "0")
                : "0:00"}
            </span>

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full accent-green-500 h-1 cursor-pointer"
            />

            <span className="text-xs text-gray-400">
              {audioRef.current && audioRef.current.duration
                ? Math.floor(audioRef.current.duration / 60) +
                  ":" +
                  String(Math.floor(audioRef.current.duration % 60)).padStart(2, "0")
                : "0:00"}
            </span>
          </div>
        </div>

        {/* 🔊 Volume */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/3 mt-3 md:mt-0 space-x-4">
          <FaVolumeUp className="text-gray-300" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-24 accent-green-500 h-1 cursor-pointer"
          />
        </div>
      </div>

      {/* 🎵 Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      />
    </footer>
  );
};

export default PlayerBar;
