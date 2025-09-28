import { useState } from "react";
import FaceExpressionDetection from "./FaceExpressionDetection";
import MoodSongs from "./MoodSongs";

const Live = () => {
  const [Songs, setSongs] = useState([]);

  return (
    <div className="pt-20 bg-gradient-to-br  from-gray-800 via-gray-900 to-black  h-screen">
      <FaceExpressionDetection setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  );
};

export default Live;
