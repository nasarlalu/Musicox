import MainBar from '../components/MainBar'
import LeftBar from '../components/LeftBar'
import Rightbar from '../components/Rightbar'
const Home = () => {
    return (
        <section className=''>
            <div className='container-fluid'>

                <div className='row'>

                    <div className='col-md-3 p-0'>
                        <LeftBar />
                    </div>

                    <div className='col-md-6 p-0'>
                        <MainBar />
                    </div>

                    <div className='col-md-3 p-0'>
                        <Rightbar />
                    </div>

                </div>

            </div>
        </section >
    )
}

export default Home;