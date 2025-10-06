import FaceExpressionDetection from "./FaceExpressionDetection";
import MoodSongs from "./MoodSongs";

const Live = () => {
  return (
    <div className=" pt-20 bg-gradient-to-br  from-gray-800 via-gray-900 to-black  h-auto pb-5">
      <FaceExpressionDetection />
      <MoodSongs />
    </div>
  );
};

export default Live;
