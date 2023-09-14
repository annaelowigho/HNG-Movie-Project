import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([])
    
    const navigate = useNavigate()

    const handleSumit = async (e) => {
      e.preventDefault();
      
      navigate(`search/${query}`)
      
    
 
  };
  return (
    <>
      <header className="flex items-center justify-between w-full absolute top-0 left-0 px-[98px]">
        <div className="flex items-center gap-[24px] mt-[15px]">
          <img src="/assets/tv.png" alt="" />
          <h1 className="text-[24px] font-bold text-white ">MovieBox</h1>
        </div>
        <form
          onSubmit={handleSumit}
          className="flex items-center justify-between mt-[22px] border-[1px] border-white w-[150px] lg:w-[525px] md:w-[350px] h-[35px] p-[10px] rounded-md "
        >
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to watch?"
            className="bg-transparent outline-none w-full text-white"
          />
          <BiSearch className="text-white" />
        </form>
        <div className="flex items-center justify-center gap-[27px] mt-[15px]">
          <h3 className="text-[16px] text-white">Sign in</h3>
          <img
            src="/assets/Menu.png"
            alt=""
            className="bg-[#e11d48] w-[36px] h-[36px] rounded-full"
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
