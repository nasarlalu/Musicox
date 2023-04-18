import { useSelector } from 'react-redux'

const LeftBar = () => {

    const stateData = useSelector((state) => state.users)  // "state.users.value" means getting a state value of a reducer whose name is 'users'
    const playlist = stateData?.playlists?.items

    console.log(playlist, 'pyyyyyyy');

    return (
        <div className="leftbar-section">
            <h1>Sidebar</h1>

            {playlist.map((playlist, i) => {
                console.log(playlist.name, 'plllll');
                return (
                    <p key={i} className='txt-white'>{playlist.name}</p>
                )
            })}

        </div>
    )
}

export default LeftBar;