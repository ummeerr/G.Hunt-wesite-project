import React, { useEffect, useState } from 'react';
import GenreList from '../Components/GenreList';
import GlobalApi from '../Services/GlobalApi';
import GameBanner from '../Components/GameBanner';
import TrendingGames from '../Components/TrendingGames';
import Spline from '@splinetool/react-spline';
import GamesByGenresId from '../Components/GamesByGenresId';
import Starter from '../Components/Starter';



function Home() {
  const [allGamesList,setAllGameList]= useState();
  const [gameListByGenres,setGameListByGenres]= useState([]);
  const [choosedGenresName,setChoosedGenresName]=useState('Action');
  const [showSidebar, setShowSidebar]=useState(false);
  const [gameBanner, setGameBanners] = useState([]);
  

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
    })
  }

  const getGameListByGenresId=(id)=>{
    console.log("chal gaya", id)
    GlobalApi.getGameListByGenresId(id).then((resp)=>{
      console.log("games list by genre id",resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }

  return (
    <div className='relative'>
      <Starter toggleSidebar={showSidebar} setToggleSidebar={setShowSidebar}/>

      {showSidebar && (
        <div className='fixed insent-0 bg-black/50 z-20 md:hidden'
             onClick={()=> setShowSidebar(false)}>
        </div>
      )}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 z-20 shasow-x1 transform transition-transform
                       duration-300 ease-in-out
                       ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:hidden pt-16`}>
      <div className='p-4'>
        <GenreList naamId={(naamId)=>{
                   getGameListByGenresId(naamId);
                   setShowSidebar(false);
        }}
        choosedGenresName={(name) => setChoosedGenresName(name)}/>
        </div>
      </div>

      <div className='relative h-screen w-full overflow-hidden bg-white dark:bg-zinc-900'>
       <div className='fixed inset-0 z-0 h-full w-full pointer-events-auto'>
        <Spline className='h-full w-full invert dark:invert-0' scene="https://prod.spline.design/bt1hj1UWcbeceVbG/scene.splinecode" />
        </div>
        <div className='absolute inset-0 z-10 flex items-center justify-center pointer-events-none'>
        <h2 className="text-[65px] md:text-[80px] lg:text-[90px] font-extrabold text-transparent bg-clip-text
                       bg-gradient-to-r from-purple-400 via-pink-500 to-black-500 
                       animate-textShine animate-fadeInScale drop-shadow-xl pointer-events-none">Find your Games</h2> 
       </div>
      </div>

      <div className='relative pt-16'>
        <div className='px-5'>
          {allGamesList?.length>0&&gameListByGenres.length>0?(
            <div className='space-y-8'>
              <GameBanner gameBanner={allGamesList[8]}/>
              <TrendingGames gameList={allGamesList}/>
              </div>
          ): null}
        </div>
      
    <div className='grid grid-cols-1 md:grid-cols-4 px-5 mt-8 gap-8'>
      <div className='hidden md:block md:col-span-1'>
        <div className='sticky top-28'>
        <GenreList naamId={(naamId)=>getGameListByGenresId(naamId)}
                   choosedGenresName={(name)=>setChoosedGenresName(name)}/>
        </div>
      </div>

       <div className='col-span-1 md:col-span-3'>
        {allGamesList?.length>0&&gameListByGenres.length>0?(
          <GamesByGenresId gameList={gameListByGenres} 
                           choosedGenresName={choosedGenresName}/>
        ): null}
       </div>
    </div>
      </div>
      <footer className=" z-20 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 py-8 px-5 mt-8">
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between  gap-6 mb-6">
      <div className="max-w-md">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          At G-Hunt, we take the time to listen to our players. Feel free to 
          contact us by email or update us with latest game news, at your convenience.
        </p>
      </div> 
      <div className=" z-20 flex flex-col space-y-3 cursor-pointer">
        <p className="flex items-center text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 
                      transition-colors hover:font-semibold">
          <span className="mr-2 ">→</span>
          contact@G-hunt.com
        </p>
        <p className="flex items-center text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 
                      transition-colors hover:font-semibold">
          <span className="mr-2">→</span>
          Update us
        </p>
      </div>
    </div>
        <div className='absolute bottom-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/10 dark:bg-black/10 border-b
                        border-gray-200 dark:border-gray-700'>
          <p className='flex items-center justify-center text-violet-700 text-sm'>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
             </div>
         </footer>   
      </div>
    
  )
}

export default Home