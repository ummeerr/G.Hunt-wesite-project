import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';

function GenreList({naamId,choosedGenresName}) {

  const [genreList, setGenreList] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    getGenreList();
  }, [])
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    })
  }


  return (
    <div className='relative z-20'>
      <h2 className="text-[25px] font-bold text-white dark:text-white mb-6">
        Geners
      </h2>
      <div className='space-y-3 max-h-[calc(100vh-150px)] overflow-y-auto'>
      {genreList.map((item, index) => (
        <div 
          onClick={()=>{setActiveIndex(index);naamId(item.id);
                choosedGenresName(item.name)}}
          className={`flex gap-3 items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ease-out
                      hover:bg-zinc-400 hover:dark:bg-zinc-700 
                           ${activeIndex == index ? "bg-zinc-400 dark:bg-zinc-700":null}`}>
          <div className='relative overflow-hidden rounded-lg w-10 h-10 flex-shrink-0'>
          <img src={item.image_background} 
               className={`w-full h-full object-cover transition-all duration-300 ease-out
                              ${activeIndex==index?"scale-110 hover:scale-105":null}`} 
                              alt={item.name}/>
          <div className={`absolute inset-0 bg-black/10 dark:bg-black/30 transition-opacity duration-300
                              ${activeIndex==index ? "opacity-30" : "opacity-0 group-hover:opacity-20"}`}/>
          </div>  

          <h3 className={`text-black dark:text-gray-100 text-lg transition-all ease-out duration-200
                              ${activeIndex==index?"font-semibold scale-[1.02]":"hover:font-medium" }`}>
                          {item.name}
                      </h3>

          {activeIndex === index && (
            <div className='ml-auto w-3 h-3 bg-violet-700 rounded-full animate-pulse'/>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}

export default GenreList