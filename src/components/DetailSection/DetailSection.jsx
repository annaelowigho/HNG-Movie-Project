import React from "react";
import { AiTwotoneStar, AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GiTicket } from "react-icons/gi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevision } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { getImage } from "../../lib/constants";
import { Link } from "react-router-dom";


  const DetailSection = ({movie}) => {
    const {poster_path, backdrop_path, release_date, title, overview, popularity, vote_count, id} = movie

  
  return (
    <>
      <div className="flex">
        <div className="pt-[52px] w-[300px] border-[1px] mr-[32px] rounded-tr-[30px] rounded-br-[30px] px-0">
          <div className="flex items-center gap-[24px] px-[20px] pb-[90px]">
            <Link to={"/"}><img src="/assets/tv.png" alt="" className="w-[50px] h-[50px]" /></Link>
            <h1 className="text-[24px] font-bold text-[#333333] leading-[24px] ">
              MovieBox
            </h1>
          </div>
          <div className="flex flex-col ">
            <span className="flex items-center justify-center gap-[15px] mb-[50px] h-[56px] cursor-pointer hover:bg-[#fde7ed]">
              <GoHome />
              <p className="text-[20px] text[#666666]">Home</p>
            </span>
            <span className="flex items-center justify-center gap-[15px] mb-[50px] h-[56px] cursor-pointer hover:bg-[#fde7ed]">
              <BiCameraMovie />
              <p className="text-[20px] text[#666666]">Movie</p>
            </span>
            <span className="flex items-center justify-center gap-[15px] mb-[50px] h-[56px] cursor-pointer hover:bg-[#fde7ed]">
              <PiTelevision />
              <p className="text-[20px] text[#666666]">TV Series</p>
            </span>
            <span className="flex items-center justify-center gap-[15px] mb-[50px] h-[56px] cursor-pointer hover:bg-[#fde7ed]">
              <FaRegCalendarAlt />
              <p className="text-[20px] text[#666666]">Upcoming</p>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-[170px] 
          h-[210px] border-[1px] mx-[60px] bg-[#fde7ed] rounded-[30px] pb-[15px] mb-[44px]">
            <p className="px-[17px] pt-[30px] pb-[9px] text-[15px] text-[#333333]">
              Play movie quizes and earn free tickets
            </p>
            <p className="px-[17px] text-[12px] text-[#666666] pb-[14px]">
              50 people are playing now
            </p>
            <button className="w-[112px] h-[30px] bg-[#fadee5] text-[#BE123C] text-[12px] rounded-[30px] cursor-pointer">
              Start Playing
            </button>
          </div>
          <span className="flex items-center justify-center gap-[15px] pb-[15px] h-[56px] cursor-pointer hover:bg-[#fde7ed]">
            <RiLogoutBoxRLine />
            <p className="text-[20px] text-[666666]">Log Out</p>
          </span>
        </div>
        <div className="pt-[38px]">
          <img
            src={getImage(poster_path)}
            alt=""
            className="w-[1198px] h-[449px] object-cover rounded-md"
          />
          <div className="pl-[18px] pt-[31px] flex gap-[26px] ">
            <div className="flex flex-col w-[774px] h-[90px]">
              <div className="flex pb-[25px]">
                <p className="pr-[17px]">
                {title} • {release_date} • PG-13 • 2h 10m
                </p>
                <button className="bg-[#F8E7EB] text-[#B91C1C] text-[15px] w-[84px] h-[30px] rounded-[40px] mr-[11px]">
                  Action
                </button>
                <button className="bg-[#F8E7EB] text-[#B91C1C] text-[15px] w-[84px] h-[30px] rounded-[40px]">
                  Drama
                </button>
              </div>
              <p className=" pb-[20px]">
               {overview}
              </p>
              <div className="flex flex-col gap-[31px] pb-[30px] text-[20px]">
                <p>
                  Director:{" "}
                  <span className="text-[#BE123C]">Joseph Kosinski</span>
                </p>
                <p>
                  Writers:{" "}
                  <span className="text-[#BE123C]">
                    Jim Cash, Jack Epps Jr, Peter Craig
                  </span>
                </p>
                <p>
                  Stars:{" "}
                  <span className="text-[#BE123C]">
                    Tom Cruise, Jennifer Connelly, Miles Teller
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between w-[785px] h-[55px] gap-[24px] border-[1px] cursor-pointer">
                <p className="text-[20px] bg-[#BE123C] text-white p-[10px] rounded-md">
                  Top rated movies #65
                </p>
                <input
                  type="text"
                  placeholder="Awards 9 nominations"
                  className="flex-1"
                />
                <IoIosArrowDown className="w-[30px] h-[30px] pr-[10px] text-[#333333]" />
              </div>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="flex gap-[9px] items-center mb-[24px]">
                <AiTwotoneStar className="text-[yellow]" />
                <p>
                  <span className="text-[#E8E8E8]">8.5</span> |{" "}
                  <span className="text-[#666666]">350k</span>
                </p>
              </div>
              <div
                className="flex items-center justify-center gap-[10px] bg-[#BE123C] text-white w-[360px] 
              h-[45px] mb-[12px] rounded-md cursor-pointer hover:bg-[#f1d9df]"
              >
                <GiTicket />
                <p>See showtimes</p>
              </div>
              <div
                className="flex items-center justify-center gap-[10px] w-[360px] h-[45px] 
              border-[2px] border-[#BE123C] bg-[#f1d9df] text-[#333333] mb-[33px] cursor-pointer hover:bg-[#BE123C] hover:border-[#f1d9df]"
              >
                <AiOutlineUnorderedList />
                <p>More watch options</p>
              </div>
              <img
                src="/assets/Rectangle 37.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSection;
