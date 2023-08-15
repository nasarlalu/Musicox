import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HiHome } from 'react-icons/hi';
import { FaRegPlusSquare } from "react-icons/fa";
import { BiLibrary, BiSearch } from "react-icons/bi";
import { MdPodcasts } from "react-icons/md";
import { VscHeartFilled, VscChevronRight } from "react-icons/vsc";
import img from '../assets/images/music-player.webp'

const LeftBar = () => {


    const [currTrackName, setCurrTrackName] = useState(null)
    // const [currTrackImg, setCurrTrackImg] = useState(null)

    const stateData = useSelector((state) => state.users)  // "state.users.value" means getting a state value of a reducer whose name is 'users'
    const playlist = stateData?.playlists?.items

    console.log(playlist, 'playlists');

    let current = stateData?.myCurrentPlayingTrack?.item?.name
    console.log(current, 'current playing name');

    function displayPlaylist() {
        console.log(stateData?.playlists?.items[0], 'staddata');
    }

    useEffect(() => {
        setCurrTrackName(stateData?.myCurrentPlayingTrack?.item?.name)
    })

    return (
        <div className="leftbar-section">
            {/* {playlist.map((playlist) => {
                console.log(playlist.name, 'plllll');
                return (
                    <p key={playlist.name} className='txt-white'>{playlist.name}</p>
                )
            })} */}
            <div className='brand-name-container'>
                <h1 className='py-4'>MUZYX</h1>
            </div>

            <div className='icon-container'>
                <HiHome />
                <p>Home</p>
            </div>

            <div className='icon-container' onClick={displayPlaylist}>
                <FaRegPlusSquare />
                <p>My Playlist</p>
            </div>

            <div className='icon-container'>
                <BiSearch />
                <p> Search</p>
            </div>

            <div className='icon-section-name'>
                <p>Your Collection</p>
            </div>

            <div className='icon-container'>
                <BiLibrary />
                <p>Your Library</p>
            </div>

            <div className='icon-container'>
                <MdPodcasts />
                <p>Your Podcasts</p>
            </div>

            <div className='icon-container'>
                <VscHeartFilled />
                <p>Favourite Songs</p>
            </div>
            <hr className='hrLine' />

            <div className='curr-playing-song-container'>
                <img src={img} />
                <p style={{ fontSize: '12px' }}>{currTrackName}</p>
                <VscChevronRight />
            </div>

        </div>
    )
}

export default LeftBar;