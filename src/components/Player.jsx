import React, { useEffect, useRef, useState } from 'react'
import Details from '../components/Details'
import Controls from '../components/Controls'

const Player = () => {

    const [song, setSong] = useState([
        {
            id: 1,
            title: "song 1",
            title_img: 'images/song1.jpg',
            src: 'audio/song1.mp3',
            description: "This is first songs description. this is awesome song . i love this song very much."
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
    const [isPlaying, setIsPlaying] = useState(false)


    const audioElem = useRef()

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play()
        } else {
            audioElem.current.pause()
        }
    }, [])




    // console.log(currentSong)
    return (
        <div className='mt-10 bg-gradient-to-br from-cyan-800 to-indigo-500 h-fit w-72 rounded p-5 drop-shadow-2xl '>

            <h1 className='text-center font-bold text-3xl mb-4 uppercase text-slate-800'>{song[currentSong].title}</h1>
            <img src={song[currentSong].title_img} alt="" className={`w-52 h-52 rounded-full border-dashed border-2 border-cyan-300 p-1 mx-auto object-cover ${isPlaying ? "animate-spin" : null}`} />
            <Details currentSong={currentSong} song={song} />

            <Controls song={song} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />


            <audio ref={audioElem} className='w-full mt-3 bg-blue-500 rounded' controls src={song[currentSong].src}>


            </audio>


        </div>
    )
}

export default Player