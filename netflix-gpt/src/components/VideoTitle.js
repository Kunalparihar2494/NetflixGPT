import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] pl-[5%] w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/5">{overview}</p>
      <div>
        <button className="bg-gray-500 text-black px-8 py-2 text-lg mr-6 rounded-md opacity-50 hover:opacity-100">▶️ Play</button>
        <button className="bg-gray-500 text-black pl-4 pr-5 py-2 text-lg mr-6 rounded-md opacity-50 hover:opacity-100">❕ More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
