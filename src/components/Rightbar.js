import favartistImg from '../assets/images/music-player.webp'
import ArtistImg from '../assets/images/arrahman.jpg'
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'


const Rightbar = () => {

    const reduxData = useSelector((state) => state.users)

    const [favArtsists, setFavArtsists] = useState([])
    const artistData = reduxData?.topArtists

    console.log(favArtsists, 'FavArtsistState')

    let userImg = reduxData?.user?.images[1]?.url
    let userName = reduxData?.user?.display_name


    useEffect(() => {
        setFavArtsists(artistData)
    }, [])


    return (
        <div className="rightbar-section">

            <div className="fav-artist-section">
                <h1 className='pt-4 pb-2'>Favourite Artist</h1>
                <div className="row">

                    {favArtsists?.items.map((item) => {
                        return (
                            <div className='fav-artist-container' key={item.name}>
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center my-1">

                                        <img src={item.images[0]?.url} alt="" className='fav-artist-img' />

                                        <div className="fav-artist-name ms-3">
                                            <h6>{item.name}</h6>
                                            <p>{item.popularity} songs in library</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>

            <div className='currently-playing-song-container'>
                <div className='curr-play-image'>
                    <img src={userImg} alt='' />
                </div>

                <div className='curr-play-details'>
                    <h6>Welcome Back!</h6>
                    <p>{userName}</p>
                </div>

            </div>

        </div>
    )
}

export default Rightbar;