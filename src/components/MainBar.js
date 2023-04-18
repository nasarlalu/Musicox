import { useSelector } from 'react-redux'
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
            <h1>Main</h1>
            
        </div>
    )
}

export default MainBar;