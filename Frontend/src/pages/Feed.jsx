import { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/songs`);
        setCards(res.data);
      } catch (err) {
        console.log("song not found", err);
      }
    };

    fetchSongs();
  }, []);
  return (
    <div className="pr-5 pt-30 bg-gradient-to-br from-gray-800 via-gray-900 to-black h-screen px-5 py-16">
      <h1 className="text-3xl font-semibold text-gray-300">Feed Songs</h1>

      <div className="flex gap-6 flex-wrap">
        {cards.length > 0 ? (
          <div className="w-[170px] h-[250px] mt-5 rounded shadow-lg px-4 ">
            <img className="h-[175px] object-cover mt-4" src={cards.image} />
            <div className="">
              <h1 className="text-lg text-gray-300 font-semibold -mb-0.5">
                {cards.title}
              </h1>
              <p className="text-sm text-gray-300 ">{cards.artist}</p>
            </div>
          </div>
        ) : (
          <p className="text-4xl mt-[250px] ml-[500px] font-light text-gray-200">
            ❌Empty Songs...🎶
          </p>
        )}
      </div>
    </div>
  );
};

export default Feed;
