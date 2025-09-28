import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import axios from 'axios';

const FaceExpressionDetection = ({setSongs}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load face-api models
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  // Start webcam
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam:", err));
  };

  // Detect expressions
  async function faceDetect() {
    if (!videoRef.current) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    let facedetect = 0;
    let _expression = "";

    if (!detections || detections.length === 0) {
      console.log("No face Detected!!!");
      return;
    }

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > facedetect) {
        facedetect = detections[0].expressions[expression];
        _expression = expression;
      }
    }

    axios.get(`http://localhost:3000/songs?mood=${_expression}`)
    .then(responce=>{
      console.log(responce.data)
      setSongs(responce.data.songs)
    })
  }

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className=" pl-32 pr-32 ">
      <h1 className="text-4xl font-bold text- mt-10 mb-10">
        Live Mood Detection
      </h1>
      <div className="flex items-start  gap-5 w-full mb-12 "> 
        <video className="w-80 rounded-2xl" ref={videoRef} autoPlay muted />

        <div className="flex-col ">
          <div className="flex-col gap-1 ">
            <h2 className="text-2xl font-semibold">Live Mood Detection</h2>
            <p className="text-xl w-[60%]">
              Your Current mood is being analyzed in real-time. Enjoy your music
              tailored to you feelings{" "}
            </p>
          </div>
          <button
            className="p-2 text-xl mt-5 text-gray-600 rounded bg-blue-200 font-bold"
            onClick={faceDetect}
          >
            Detect Face
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceExpressionDetection;
