import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CardDetail from "../../components/CardDetail/CardDetail";

const Search = () => {
  const [search, setSearch] = useState([]);


  const params = useParams();

  const fetchSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${params.slug}&include_adult=false&language=en-US&page=1desc&api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    const data = await res.json();

    console.log(data);

    setSearch(data.results);
  };

  useEffect(()=>{
    fetchSearch()
  },[params.slug])
  return (
    <>
     <div className="px-[80px] py-[50px]">
      <h1 className="pb-[20px] text-[30px] font-bold">Results:</h1>
     {
        search.length > 0 ? <div className="grid grid-cols-4">{search.map((movie)=>(
            <CardDetail movie={movie}/>    
        ))}</div>: <>No result found for '{params.slug}'</>

     }
     </div>
    </>
  );
};

export default Search;
