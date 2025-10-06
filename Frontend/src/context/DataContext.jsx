import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MyDataContext = createContext();

const DataContext = ({ children }) => {
  const normalize = (id) => String(id);
  const [Songs, setSongs] = useState([]);

  const [Fav, setFav] = useState(() => {
    try {
      const raw = localStorage.getItem("favorites");
      return raw ? JSON.parse(raw).map(normalize) : [];
    } catch (e) {
      console.error("Failed to read favorites from localStorage", e);
      return [];
    }
  });
  const [cards, setCards] = useState([]);
  const [isPlaying, setIsPlaying] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/cards");
        setCards(res.data.titles);
      } catch (err) {
        console.log("song not found", err);
      }
    };

    fetchSongs();
  }, []);

  // persist IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(Fav));
    } catch (e) {
      console.error("Failed to save favorites to localStorage", e);
    }
  }, [Fav]);

  // toggle accepts either an id or a song object
  const toggleFavorite = (songOrId) => {
    const id =
      typeof songOrId === "object" && songOrId !== null
        ? normalize(songOrId._id)
        : normalize(songOrId);

    setFav((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return [...prev, id];
    });
  };

  // convenience: list of full song objects that are favorited
  const favoriteSongs = cards.filter((c) => Fav.includes(normalize(c._id)));

  return (
    <div>
      <MyDataContext.Provider
        value={{
          Songs,
          setSongs,
          cards,
          setCards,
          Fav,
          toggleFavorite,
          isPlaying,
          setIsPlaying,
          favoriteSongs,
        }}
      >
        {children}
      </MyDataContext.Provider>
    </div>
  );
};

export default DataContext;
