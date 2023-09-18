import React from 'react'

const Details = ({ currentSong, song }) => {
    return (
        <div className='text-center my-2'>
            <h1 className='text-2xl font-bold uppercase text-indigo-'>{song[currentSong].title}</h1>
            <p className='text-sm lowercase text-slate-300'>{song[currentSong].description}</p>
        </div>
    )
}

export default Details