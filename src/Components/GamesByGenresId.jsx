import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { ImCross } from "react-icons/im";


function GamesByGenresId({gameList,choosedGenresName}) {
  const [selectedGame, setSelectedGame] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(()=>{
        console.log("GameList", gameList)

    },[])

    const openModal = (game) => {
        setSelectedGame(game)
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }


  return (
    <div className='mt-0 md:-mt-8'>
      <h2 className='text-[25px] font-bold dark:text-white mb-6 flex items-center gap-3 mt-10'>        
        {choosedGenresName} Games
      </h2> 

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-4'>
        {gameList.map((item)=>(
            <div key={item.id}
                 onClick={()=> openModal(item)}
                 className='group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg
                            hover:shadow-2x1 transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200
                            dark:border-gray-700'>
                <div className='relative w-full h-48 overflow-hidden rounded-t-xl'>
                    <img src={item.background_image} 
                         className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                         alt={item.name}/>
                    <div className='flex justify-between items-center'>
                    <span className='flex items-center gap-1 text-sm'>
                      ⭐{item.rating}
                    </span>
                    </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 dark:opacity-80
                                  transition-opacity duration-300 group-hover:opacity-90'>
                  </div>
                </div>
              <div className='p-4 space-y-2'>
              <div className='flex justify-between items-start'>
              <h2 className='text-lg font-bold truncate pr-2 text-gray-900 dark:text-white'>{item.name}</h2>
              <span className='flex-shrink-0 px-2 py-1 bg-blue-600 rounded-md text-sm font-semibold text-white'>
                {item.metacritic}
              </span>
            </div>
            <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
              <span className='flex items-center mr-3'>
              <span className='text-yellow-400 dark:text-yellow-400 mr-1'>⭐</span>
                {item.rating} 
              </span> 

              <span className='flex items-center mr-3'>
              <span className='text-blue-500 dark:text-blue-300 mr-1'>🌨️</span>
                {item.reviews_count} 
              </span> 

              <span className='flex items-center'>
              <span className='text-red-500 dark:text-red-400 mr-1'>🔥</span>
                {item.suggestions_count}
              </span>
            </div> 
            </div>
          </div>               
        ))}
    </div>

    <Modal isOpen={modalIsOpen}
           onRequestClose={closeModal}
           contentLabel="Game Details"
           className="modal-content"
           overlayClassName="modal-overlay">

              {selectedGame && (
                <div className=" mb-20 mt-20 bg-transparent backdrop-blur dark:bg-black items-center justify-center rounded-lg w-full max-h-[90vh] overflow-y-auto">
                  <div className="relative">
                    <button onClick={closeModal}
                            className="absolute top-4 right-4 z-20 bg-gray-800/80 border border-black hover:border-black
                                       text-red-500 p-2 hover:bg-red-500 hover:text-black transition">
                                <ImCross />
                    </button>
                  <div className="relative h-64 w-full">
                    <img src={selectedGame.background_image} 
                         className="w-full h-full object-cover animate-pulse rounded-t-lg"
                         alt={selectedGame.name}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-3xl font-bold text-white">{selectedGame.name}</h2>
                        <div className="flex items-center mt-2">
                          <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold mr-3">
                              Metacritic: {selectedGame.metacritic}
                          </span>
                          <span className="text-white">
                            Released: {new Date(selectedGame.released).toLocaleDateString()}
                          </span>
                        </div>
                    </div>
                  </div>

                      <div className="p-6">
                         {selectedGame.tags?.length > 0&& (
                  <div className='mb-6'>
                        <h3 className='text-x1 font-bold dark:text-white mb-2'>
                          Tags
                        </h3>
                    <div className='flex flex-wrap gap-2'>
                          {selectedGame.tags.filter(tag => tag.language === 'eng')
                                            .slice(0, 10)
                                            .map((tag)=>(
                        <span key={tag.id}
                              className='text-white px-3 py-1 bg-violet-700 rounded-full text-sm capitalize'
                              title={tag.name}>
                              {tag.name.replace(/-/g, '')}
                          </span>
                          ))
                          }               
                    </div>
                  </div>
                )}
                              

                <div className="mb-6">
                  <h3 className="text-xl font-bold dark:text-white mb-2">Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                        {selectedGame.platforms?.map((platform, index) => (
                          <span key={index}
                                className="px-3 py-1 bg-violet-700 rounded-full text-sm">
                                {platform.platform.name}
                          </span>
                        ))}
                  </div>
                </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold dark:text-white mb-2">Description</h3>
              <p className="text-white">
               {selectedGame.description_raw || "No description available."}
              </p>
            </div>
                                

                {selectedGame.short_screenshots?.length > 1 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold dark:text-white mb-2">Screenshots</h3>
                  <div className="grid grid-cols-2 gap-4">
                      {selectedGame.short_screenshots.slice(1, 5).map((screenshot) => (
                        <img key={screenshot.id}
                             src={screenshot.image}
                             className="w-full h-auto rounded-lg"
                            alt={`${selectedGame.name} screenshot`}/>
                      ))}
                  </div>
                  </div>
                )}

                      <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center text-white ">
                            <span className="text-yellow-400 mr-1">⭐</span>
                                {selectedGame.rating} ({selectedGame.ratings_count} ratings)
                            </span>
                            <span className="text-white">
                                ⏱️ {selectedGame.playtime} hours avg.
                            </span>
                        </div>
                              {selectedGame.esrb_rating && (
                            <span className=" text-white px-3 py-1 bg-violet-700 rounded-full text-sm">
                              ESRB: {selectedGame.esrb_rating.name}
                            </span>
                            )}
                      </div>
                  </div>
                  </div>
                  </div>
                )}
    </Modal>
    </div>
  )
}

export default GamesByGenresId