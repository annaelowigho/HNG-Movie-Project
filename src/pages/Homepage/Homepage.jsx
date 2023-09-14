import React, { useState } from "react";
import { useEffect } from "react";
import HeroSection from "./HeroSection";
import { IoIosArrowForward } from "react-icons/io";
import CardDetail from "../../components/CardDetail/CardDetail";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY);

const Homepage = ({ title, description, release_date }) => {
  const [latestMovie, setLatestMovie] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`
    );
    const data = await res.json();
    
    setLatestMovie(data.results);
    
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <HeroSection latestMovie={latestMovie[0]} />

        <div className="flex items-center justify-between pt-[70px] px-[98px] pb-[44px]">
          <h3 className="text-[36px] leading-[46.87px] font-bold">
            Featured Movie
          </h3>
          <div className="flex items-center justify-center text-[#B91C1C]">
            <button className="text-[18px] leading-[24px]">See More</button>
            <IoIosArrowForward/>
          </div>
        </div>

        <div className="px-[98px] grid grid-cols-4 gap-[80px]">
          {latestMovie.map((movie) => {
            return <CardDetail movie={movie} data-testid={'movie-card'}/>;
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
