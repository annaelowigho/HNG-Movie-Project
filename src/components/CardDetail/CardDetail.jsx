import React from 'react'
import { getImage } from "../../lib/constants";
import { Link } from 'react-router-dom';

const CardDetail = ({movie}) => {
  const {poster_path, backdrop_path, release_date, title, popularity, vote_count, id} = movie

  return (
    <>
    <Link to={`/detail/${id}`} className=' mb-[126px] w-[250px] h-[490px]' >
      <img src={getImage(poster_path || backdrop_path)} alt="" className='w-[250px] h-[370px] mb-[12px]'/>
        <p className='text-[12px] leading-[15.62px] mb-[12px] text-[#9CA3AF]'data-testid={'movie-realease-date'}>{release_date}</p>
        <h4 className='text-[18px] leading-[23.44px] mb-[12px] font-bold'>{title}</h4>
        <div className='flex items-center justify-between mb-[12px]'>
          <div className='flex items-center'>
            <img src="\assets\imdb.png" alt="" className='w-[35px] h-[17px]'/>
            <p className='ml-[10px] text-[12px] text-[#111827]'>{popularity}</p>
          </div>
          <div className='flex items-center'>
            <img src="\assets\tomato.png" alt="" className='w-[16px] h-[17px]'/>
            <p className='ml-[10px] text-[12px] text-[#111827]'>{vote_count}</p>
          </div>
        </div>
        <p className='text-[12px] text-[#9CA3AF]'>Action, Adventure, Horror</p>
      </Link>      
    </>
  )
}

export default CardDetail