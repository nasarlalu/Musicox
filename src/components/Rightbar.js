import favartistImg from '../assets/images/music-player.webp'
import ArtistImg from '../assets/images/arrahman.jpg'


const Rightbar = () => {
    return (
        <div className="rightbar-section">

            <div className="fav-artist-section">
                <h1 className='pt-4 pb-2'>Favourite Artist</h1>
                <div className="row">

                    <div className='fav-artist-container'>
                        <div className="col-md-12">
                            <div className="d-flex align-items-center">
                                <img src={favartistImg} alt="" className='fav-artist-img' />
                                <div className="fav-artist-name ms-3">
                                    <h6>Ar Rahman</h6>
                                    <p>190 songs in library</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='fav-artist-container'>
                        <div className="col-md-12">
                            <div className="d-flex align-items-center">
                                <img src={favartistImg} alt="" className='fav-artist-img' />
                                <div className="fav-artist-name ms-3">
                                    <h6>Ar Rahman</h6>
                                    <p>190 songs in library</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='fav-artist-container'>
                        <div className="col-md-12">
                            <div className="d-flex align-items-center">
                                <img src={favartistImg} alt="" className='fav-artist-img' />
                                <div className="fav-artist-name ms-3">
                                    <h6>Ar Rahman</h6>
                                    <p>190 songs in library</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='currently-playing-song-container my-4'>
                <div className='curr-play-image'>
                    <img src={ArtistImg} alt='' />
                </div>

                <div className='curr-play-details'>
                    <h6>Despacito</h6>
                    <p>artist name</p>
                </div>

            </div>

        </div>
    )
}

export default Rightbar;