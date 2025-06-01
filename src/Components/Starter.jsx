import React, { useContext, useEffect, useState } from 'react'
import { SlGameController} from "react-icons/sl";
import { IoMoon, IoSearch, IoSearchOutline } from "react-icons/io5";
import { MdLightMode, MdMenu, MdClose} from "react-icons/md";
import { FcSearch } from 'react-icons/fc';
import { ThemeContext } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';


function Starter({toggleSidebar, setToggleSidebar}) {
    const [searchQuery, setSearchQuery] = useState('');
    const {theme, setTheme} = useContext(ThemeContext);
   
   

    


    return (
        <nav className='absolute top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/10 dark:bg-black/10 border-b
                        border-gray-200 dark:border-gray-700'>
            <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex  h-16'>

            <div className='flex items-center'>
                <button className='md:hidden mr-2 text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400'
                        onClick={()=> setToggleSidebar(!toggleSidebar)}>
                    {toggleSidebar ? <MdClose size={24} className='text-red-500' /> : <MdMenu size={24}/>}
                </button>
                <div className='flex-shrink-0 flex items-center'>
                    <SlGameController size="32" 
                                  className=' text-violet-600 dark:text-violet-400 cursor-pointer hover:opacity-80 transition-opacity '/>
                    <span className='ml-4 text-x1 font-bold text-gray-800 dark:text-white hidden sm:block'> G.HUNT </span>
                </div>
            </div>
            
            

            <div className='absolute right-4 top-4 space-x-3'>
                <div>
                  {theme=='dark' ?
                    ( <MdLightMode className='text-[35px] bg-black/10 text-yellow-500 p-1 rounded-full cursor-pointer'
                    onClick={() => {setTheme('light'); localStorage.setItem('theme','light')}} /> )
                    :
                    (<IoMoon className='text-[35px] bg-white text-black p-1 rounded-full cursor-pointer'
                        onClick={() => {setTheme('dark'); localStorage.setItem('theme','dark')}} />)
                  }
                </div>
              </div>
              <div className='absolute right-20 top-5 space-x-3'>
              <Link className='mr-2 text-black dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-700'
                    to="/login">Login</Link>
              <Link className='mr-2 text-black dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-700'
                    to="/signup">Signup</Link>
              </div>
             </div>
            </div>
        </nav>
    );
}

export default Starter