import '../assets/styles/LoginPage.css'
import { motion } from "framer-motion";
import { loginUrl } from '../services/spotify'

const Login = () => {
    return (
        <div className="login-section">
            <div className="container">
                <div

                    className="row align-items-center text-center">

                    <motion.div
                        initial={{ y: -500 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className='col-lg-12'>

                        <div className='logo-container'>
                            <h1>Logo</h1>
                        </div>

                        <div className='login-desc'>
                            <p className='txt-prp text-center'>
                                The Genie Music Player is a user-friendly music application developed by me.
                                It has an elegant design and allows easy management of your favorite tracks and playlists.
                                You can customize the listening experience by creating playlists and adjusting equalizer settings.
                                The app seamlessly integrates with popular streaming services like Spotify and Apple Music.
                                Try the Genie Music Player today for a powerful and personalized music experience.
                            </p>
                        </div>
                        

                        <div className='login-btn-container my-5'>

                            <a href={loginUrl} className='login-btn my-3'>Login</a>
                            {/* <p className='white-dash m-0'>or</p>
                            <a className='signin-btn my-3'>SignUp</a> */}

                        </div>

                    </motion.div>

                </div>
            </div>

        </div >

    )
}

export default Login