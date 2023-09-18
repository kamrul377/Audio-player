import React from 'react'


import { BsFillPlayFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { HiMiniPause } from 'react-icons/hi2'
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6'


const Controls = ({ currentSong, setCurrentSong, song, isPlaying, setIsPlaying }) => {



    const handleIncrement = () => {
        if (song.length - 1 < currentSong + 1) {
            setCurrentSong(0)
        } else {
            setCurrentSong(currentSong + 1) //2
        }
    }

    const handleDecrement = () => {
        // if(currentSong<0){ 
        //     setCurrentSong(song.length-1)
        // }

        if (currentSong < 1) {
            setCurrentSong(song.length - 1)
        } else {
            setCurrentSong(currentSong - 1)
        }

        console.log("now song", currentSong)
    }


    return (
        <div className='flex border w-full justify-between px-10 py-4 rounded  '>

            <FaCircleChevronLeft color='cyan' className='hover:cursor-pointer' size={30} onClick={handleDecrement} />


            {
                isPlaying ? <HiMiniPause size={30} onClick={() => setIsPlaying(!isPlaying)} className='hover:cursor-pointer rounded-full text-[#eef1f5]' /> : <BsFillPlayFill onClick={() => setIsPlaying(!isPlaying)} size={30} className='hover:cursor-pointer text-[#eef1f5]' />
            }



            <FaCircleChevronRight className='hover:cursor-pointer' color='cyan' size={30} onClick={handleIncrement} />
        </div>
    )
}

export default Controls