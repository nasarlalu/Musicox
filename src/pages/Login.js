import '../assets/styles/LoginPage.css'
import { motion } from "framer-motion";

const Login = () => {
    return (
        <div className="login-section">
            <div className="container">
                <motion.div
                    initial={{ y: -500 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    className="row align-items-center">
                    <div className='col-lg-6'>

                        <div className='logo-container'>
                            <h1>Logo</h1>
                        </div>

                        <div className='login-desc'>
                            <p className='txt-prp text-justify'>
                                The Genie Music Player is a user-friendly music application developed by me.
                                It has an elegant design and allows easy management of your favorite tracks and playlists.
                                You can customize the listening experience by creating playlists and adjusting equalizer settings.
                                The app seamlessly integrates with popular streaming services like Spotify and Apple Music.
                                Try the Genie Music Player today for a powerful and personalized music experience.
                            </p>
                        </div>

                    </div>

                    <div className='col-md-6 text-center'>
                        <div className='login-btn-container'>
                            <button className='login-btn my-3'>Login</button>
                            <p className='white-dash m-0'>or</p>
                            <button className='signin-btn my-3'>SignUp</button>

                        </div>
                    </div>
                </motion.div>
            </div>

        </div >

    )
}

export default Login