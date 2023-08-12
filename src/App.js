import React, { useState, useEffect } from 'react';
import { getTokenFromUrl } from './services/spotify'
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from 'react-redux'
import { SET_USER, SET_TOKEN, SET_PLAYLISTS, SET_TOP_ARTIST } from './redux/reducers'
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom's

const spotify = new SpotifyWebApi();

function App() {

  const dispatch = useDispatch();
  const [token, setToken] = useState()

  // console.log("state-token-1", token);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    const storedToken = localStorage.getItem('access_token');

    if (_token) {

      setToken(_token); //our segragated token value '_token'

      spotify.setAccessToken(_token);
      dispatch(SET_TOKEN({ token: _token })) 
      
      spotify.getMe().then((user) => {
        dispatch(SET_USER({ user: user?.display_name }))
        console.log(user?.display_name, 'username');
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS({ playlists: playlists }))
        console.log(playlists, 'playlists');
      })

      spotify.getMyTopArtists().then((topArtists) => {
        dispatch(SET_TOP_ARTIST({ topArtists: topArtists }))
        console.log(topArtists, 'topArtists');
      })

    } else if (storedToken) {
      setToken(storedToken)
      spotify.setAccessToken(storedToken)
      dispatch(SET_TOKEN({ token: storedToken }))

      spotify.getMe().then((user) => {
        dispatch(SET_USER({ user: user?.display_name }))
        console.log(user?.display_name, 'username');
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS({ playlists: playlists }))
        console.log(playlists, 'playlists');
      })

      spotify.getMyTopArtists().then((topArtists) => {
        dispatch(SET_TOP_ARTIST({ topArtists: topArtists }))
        console.log(topArtists, 'topArtists');
      })
    }



  }, []);



  return (
    <div className="app">
      {token ? <Home /> : <Login />}
    </div>
  )
}

export default App;
