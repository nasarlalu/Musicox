import { useSelector } from 'react-redux'
import { BiSearch } from "react-icons/bi";
import { BsSkipBackwardFill, BsFillSkipForwardFill, BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import { MdOutlineQueue } from "react-icons/md";
import { IoRepeat } from "react-icons/io5";
import { RxSpeakerQuiet, RxSpeakerLoud } from "react-icons/rx";
import { CiShuffle } from "react-icons/ci";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const MainBar = () => {

    const stateData = useSelector((state) => state.users)  // "state.users.value" means getting a state value of a reducer whose name is 'users'


    const username = stateData?.user?.display_name
    const externalIUrl = stateData?.user?.external_urls?.spotify
    const followerList = stateData?.user?.followers?.total
    const ImageUrl = stateData?.user?.images[0]?.url

    // console.log(username, 'NAME');
    // console.log(externalIUrl, 'externalIUrl');
    // console.log(followerList , 'folowers-count');
    // console.log(ImageUrl , 'ImageUrl');

    return (
        <div className="mainbar-section">

            <div className='d-flex align-items-center justify-content-start'>
                <div className='d-flex align-items-center me-4 navigation-icons justify-content-around'>
                    <BsArrowLeftCircle />
                    <BsArrowRightCircle />
                </div>

                <div className='search-bar-container py-4 w-100'>
                    <div className='search-bar'>
                        <div style={{ padding: '0px 12px 0 40px' }}>
                            <BiSearch />
                        </div>
                        <div className='w-100'>
                            <input type='text' placeholder='search for songs,playlists,artits,etc..' className='search-bar' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex align-items-center'>
                <h1>Top Trendings</h1><span className='fire-emoji'>🔥</span>
            </div>

            <div className='music-table py-3'>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Time</th>
                            <th scope="col">Album</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td >Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='player-controller'>

                <div className='player-icon-container d-flex justify-content-between'>

                    <div className='icon-part-1 d-flex d-flex align-items-center'>
                        <RiHeart2Line />
                        <MdOutlineQueue />
                    </div>

                    <div className='icon-part-2 d-flex align-items-center'>
                        <IoRepeat className='repeat-icon' />
                        <BsSkipBackwardFill />
                        <BsPlayCircleFill />
                        {/* <BsPauseCircleFill /> */}
                        <BsFillSkipForwardFill />
                        <CiShuffle className='shuffle-icon' />
                    </div>

                    <div className='icon-part-3 d-flex d-flex align-items-center'>
                        <RxSpeakerQuiet className='me-2' />
                        <input type='range' className="range-slide" />
                        <RxSpeakerLoud className='ms-2' />
                    </div>

                </div>

                <div className='player-ranger'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='me-4'><p>0.50</p></div>
                        <input type="range" className="range-slide" />
                        <div className='ms-4'><p>2.50</p></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainBar;