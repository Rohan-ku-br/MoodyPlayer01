import { useState } from "react";
import FaceExpressionDetection from "./FaceExpressionDetection";
import MoodSongs from "./MoodSongs";

const Live = () => {
  const [Songs, setSongs] = useState([]);

  return (
    <div>
      <FaceExpressionDetection setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  );
};

export default Live;
