import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-40 pb-4 text-white ">
      <h1 className="font-bold text-2xl p-4 mb-4">{title}</h1>
      <p className="w-4/12 px-4">{overview}</p>
      <button className="rounded-md m-4 p-2 bg-white text-black w-24 font-bold">
        Play
      </button>
      <button className="rounded-md m-4 p-2 bg-[#757575] w-24 font-bold">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
