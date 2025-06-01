import React, { useEffect } from 'react'
import { IoMdTrendingUp } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function TrendingGames({gameList}) {



    useEffect(()=>{
        console.log(gameList)
    })


  return (
    <div className='mt-12'>
        <div className='flex items-center justify-between mb-6'>
        <h2 className='flex items-center gap-3 font-bold text-[25px] text-white dark:text-white'>
            Trending Games <IoMdTrendingUp size={32} 
                                           className='ml-5 text-violet-700 animate-pulse'/>
        </h2>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
            {gameList.slice(0, 4).lenght}{gameList.lenght}
        </span>
        </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {gameList.slice(0, 4).map((item)=> (
            <div key={item.id}
                 className='group relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl
                            transition-all duration-300 hover:-translate-y-2 cursor-pointer'>
                <div className='relative h-64 overflow-hidden'>
                <img src={item.background_image} 
                     className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                     alt={item.name}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 flex items-end p-4'>

                    <div className='text-white w-full'>
                        <p className='font-bold text-lg mb-2'>{item.name}</p>
                        <div className='flex justify-between items-center'>
                            <span className='flex items-center gap-1 text-sm'>
                                ⭐{item.rating}
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default TrendingGames