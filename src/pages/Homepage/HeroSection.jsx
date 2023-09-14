import React, { useEffect, useState } from "react";
import { getImage } from "../../lib/constants";
import {AiFillPlayCircle} from 'react-icons/ai';

const HeroSection = ({ latestMovie }) => {
  
  if (!latestMovie) {
    return null;
  }

  const { title, overview, release_date, poster_path, backdrop_path } =
    latestMovie;

  return (
    <div className="flex flex-col h-[600px] duration-500">
      <div className="h-full w-full">
        <div
     
          className="pb-[70px] h-full w-full"
        >
          <img src="\assets\Poster (1).png" alt="" className="w-full" data-testid={'movie-poster'}/>
          <div className="pl-[98px] pt-[150px] absolute top-0 left-0 w-[404px] h-[285px]">
            <h1 className="text-white text-[20px] md:text-[30px] lg:text-[48px] leading-[20px] 
            md:leading-[35px] lg:leading-[56px] pb-[16px]">John Wick 3: Parrabelum</h1>
            <div className="flex items-center gap-[34px] w-[250px]">
              <div className="flex items-center ">
                <img
                  src="\assets\imdb.png"
                  alt=""
                  className="w-[35px] h-[17px]"
                />
                <p className="ml-[10px] text-[12px] text-white">
                  86.0 / 100
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="\assets\tomato.png"
                  alt=""
                  className="w-[16px] h-[17px]"
                />
                <p className="ml-[10px] text-[12px] text-white">97%</p>
              </div>
            </div>
            <p className="text-white text-[14px] leading-[18px] w-[302px] h-[72px] mt-[16px] mb-[16px]" data-testId={'movie-overiew'}>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <div className="flex gap-[8px] items-center justify-center bg-[#BE123C] w-[169px] h-[36px] rounded-md text-white">
              <AiFillPlayCircle/>
              <button className="text-[14px] leading-[24px] font-bold">WATCH TRAILER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
