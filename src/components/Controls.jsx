import React from 'react'


import { BsFillPlayFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { HiMiniPause } from 'react-icons/hi2'
import { FaCircleChevronLeft } from 'react-icons/fa6'


const Controls = ({ currentSong, setCurrentSong, song }) => {



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
        <div className='flex bg-blue-200 w-full justify-between px-10 py-4'>

            <FaCircleChevronLeft className='hover:cursor-pointer' size={30} onClick={handleDecrement} />

            <BsFillPlayFill size={30} className='hover:cursor-pointer' />

            <BsArrowRightCircleFill className='hover:cursor-pointer' size={30} onClick={handleIncrement} />
        </div>
    )
}

export default Controls