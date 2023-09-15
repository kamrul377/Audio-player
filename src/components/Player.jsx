import React, { useState } from 'react'
import Details from '../components/Details'
import Controls from '../components/Controls'

const Player = () => {

    const [song, setSong] = useState([
        {
            id: 1,
            title: "song 1",
            title_img: 'images/song1.jpg',
            src: 'audio/song1.mp3'
        },
        {
            id: 2,
            title: "song 2",
            title_img: 'images/song2.jpg',
            src: 'audio/song2.mp3'
        },
        {
            id: 3,
            title: "song 3",
            title_img: 'images/song3.jpg',
            src: 'audio/song3.mp3'
        }
    ])

    const [currentSong, setCurrentSong] = useState(0)
    const [nextSong, setNextSong] = useState(currentSong + 1)

    // console.log(currentSong)
    return (
        <div className='mt-10 bg-white h-[27rem] w-72 rounded shadow p-5'>

            <h1>{song[currentSong].title}</h1>
            <img src={song[currentSong].title_img} alt="" className='w-52 h-52 rounded-full border-dashed border-2 border-pink-800 p-1 mx-auto object-cover' />
            <Details currentSong={currentSong} song={song} />

            <Controls song={song} currentSong={currentSong} setCurrentSong={setCurrentSong} />


            <audio className='w-full mt-3' controls src={song[currentSong].src}>


            </audio>


        </div>
    )
}

export default Player