import React, { useState, useEffect } from 'react';
import { getTokenFromUrl } from './services/spotify'
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from 'react-redux'
import { SET_USER, SET_TOKEN, SET_PLAYLISTS, SET_TOP_ARTIST, SET_CURR_PLAYING_TRACK } from './redux/reducers'
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom's

const spotify = new SpotifyWebApi();

function App() {

  const dispatch = useDispatch();
  const [token, setToken] = useState()

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
        dispatch(SET_USER({ user: user }))
        console.log(user, 'getMe');
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS({ playlists: playlists }))
        console.log(playlists, 'getUserPlaylists');
      })

      spotify.getMyTopArtists().then((topArtists) => {
        dispatch(SET_TOP_ARTIST({ topArtists: topArtists }))
        console.log(topArtists, 'getMyTopArtists');
      })

      spotify.getMyCurrentPlayingTrack().then((myCurrentPlayingTrack) => {
        // dispatch(SET_CURR_PLAYING_TRACK({ myCurrentPlayingTrack: myCurrentPlayingTrack }))
        console.log(myCurrentPlayingTrack, 'getMyCurrentPlayingTrack');
      })

    }
  }, [token]);



  return (
    <div className="app">
      {token ? <Home /> : <Login />}
    </div>
  )
}

export default App;
