import React, { useEffect, useState } from 'react'
import DetailSection from '../../components/DetailSection/DetailSection'
import { useParams } from 'react-router-dom';

const Detail = ({ title, description, release_date }) => {
  const [movie, setMovie] = useState([]);

  const params = useParams()

  console.log(params)

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
    );
    const data = await res.json();
      console.log(data)
    setMovie(data);
    
  };
  useEffect(() => {
    fetchMovies();
  }, []);


  return <div>
         <DetailSection movie={movie} />;
        </div>
    
  
}

export default Detail