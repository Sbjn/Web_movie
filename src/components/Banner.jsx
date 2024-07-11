import React from "react";
import IconRatingHaft from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import rightImg from "../assets/temp-1.jpeg";
import iconplay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="h-[800px] w-full bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"/>
      <div className="w-full h-full flex space-x-8 items-center justify-center p-12 relative z-20">
        <div className="flex flex-col space-x-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-500 to-red-200 py-2 px-3 text-lg ">
            TV show
          </p>
          <div className="flex flex-col space-x-4 py-4">
            <h1 className="text-white text-3xl">Nghe nói em thích tôi</h1>
          </div>
          <div className="flex items-center space-x-4 py-2">
            <img src={IconRating} alt="" className="w-8 h-8" />
            <img src={IconRating} alt="" className="w-8 h-8" />
            <img src={IconRating} alt="" className="w-8 h-8" />
            <img src={IconRating} alt="" className="w-8 h-8" />
            <img src={IconRatingHaft} alt="" className="w-8 h-8" />
          </div>
          <p className="text-white py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
          </p>
          <div className="flex items-center space-x-4 py-2">
            <button className="p-3 text-white bg-black font-bold text-lg">
              Chi tiết
            </button>
            <button className="p-3 text-white bg-red-400 font-bold text-lg">
              Xem Phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[200px]] h-[600px] relative group cursor-pointer">
            <img src={rightImg} alt="rightImg" className="w-[500px] h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={iconplay} alt="" className="w-16 h-16"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
