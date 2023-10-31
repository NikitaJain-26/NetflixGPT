import React from "react";
import { useSelector } from "react-redux";
import { langConstant } from "../utils/strings";

const VideoTitle = ({ title, overview }) => {
  const lang = useSelector((store) => store.config.lang);
  return (
    <div className="absolute md:pt-40 pb-4 text-white ">
      <h1 className="font-bold text-2xl p-4 mb-4">{title}</h1>
      <p className="hidden md:block w-4/12 px-4">{overview}</p>
      <button className="rounded-md m-4 p-2 bg-white text-black w-24 font-bold">
        {langConstant[lang].play}
      </button>
      <button className="hidden md:inline-flex rounded-md m-4 p-2 bg-[#757575] w-24 font-bold">
        {langConstant[lang].moreInfo}
      </button>
    </div>
  );
};

export default VideoTitle;
