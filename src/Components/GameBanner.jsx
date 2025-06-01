import React, { useEffect, useState } from 'react';



function GameBanner({gameBanner}) {
  const [currentIndex, setCurrentIndex]= useState(0);
  

    useEffect(()=>{
      
    })
      

  return (
    <div className='relative z-10 transition-all duration-700'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-black to-transparent w-full'>
            <h2 className='text-[25px] text-white font-bold p-1'>{gameBanner.name}</h2>
            <button className='bg-violet-700 text-white px-2 p-1 hover:bg-violet-800 transition-colors'>Get Now</button>
        </div>
        <img src={gameBanner.background_image}
             className='md:h-[400px] w-full object-cover rounded-lg'
             alt={gameBanner.name}
        />
    </div>
  )
}

export default GameBanner