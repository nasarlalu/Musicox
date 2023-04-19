import React, { useState, useEffect } from 'react';
import { getTokenFromUrl } from './services/spotify'
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from 'react-redux'
import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from './redux/reducers'
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom's

const spotify = new SpotifyWebApi();

function App() {

  const dispatch = useDispatch();
  const [token, setToken] = useState()

  console.log("state-token-1", token);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      setToken(_token); //our segragated token value '_token'


      spotify.setAccessToken(_token);
      dispatch(SET_TOKEN({ token: _token })) //adding that token value to the redux-global-state


      //getting my details from 'SpotifyWebApi' and adding those value to the redux-global-state
      spotify.getMe().then((user) => {
        dispatch(SET_USER({ user: user }))
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS({ playlists: playlists }))
      })

      // spotify.getMyDevices().then(data => {
      //   console.log(data , 'playPayload');
      //   const deviceId = data.devices[0].id;
      //   const songUrl = 'spotify:track:7CvP3o2uVwfzQaW46A7D34'
      //   spotify.play({ uris: [songUrl], device_id: deviceId });
      // });

    }

  }, []);



  return (
    <div className="app">
      {/* {token ? (
        
      ) : (
        <Login />
      )} */}

      <Home />
    </div>
  )
}

export default App;
