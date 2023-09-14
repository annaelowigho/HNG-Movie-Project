import React from 'react'
import {AiFillFacebook, AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'


const Footer = () => {
  return (
    <>
        <div className='flex flex-col items-center justify-center pb-[73.57px]'>
            <div className='flex items-center gap-[20px] text-[30px] mb-[36px]'>
                <AiFillFacebook/>
                <BiLogoInstagram />
                <AiOutlineTwitter/>
                <AiFillYoutube/>
            </div>
            <ul className='flex items-center gap-[20px] mb-[36px]'>
                <li>Conditions of Use</li>
                <li>Privacy Policies</li>
                <li>Press Room</li>
            </ul>
            <span>© 2023 MovieBox by Owigho Ufuoma Annabel</span>
        </div>
    </>
  )
}

export default Footer