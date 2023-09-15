import React from 'react'

const Details = ({ currentSong, song }) => {
    return (
        <div className='text-center my-2'>
            <h1 className='text-2xl font-bold'>{song[currentSong].title}</h1>
            <p className='text-sm text-[#333]'>{song[currentSong].title + "description"}</p>
        </div>
    )
}

export default Details