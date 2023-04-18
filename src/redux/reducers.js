import { createSlice } from '@reduxjs/toolkit'
import { initialData } from './initialdata'


//   "createSlice" creates it own action by giving the reducers name
export const userSlice = createSlice({

    name: 'users',
    initialState: { value: initialData }, //initialState of redux

    reducers: {

        SET_USER: (state, action) => { //name of reducer
            return {
                ...state,
                user: action.payload.user
            }
        },

        SET_TOKEN: (state, action) => {
            return {
                ...state,
                token: action.payload.token
            }
        },

        SET_PLAYLISTS: (state, action) => {
            return {
                ...state,
                playlists: action.payload.playlists
            }
        },

        SET_DISCOVER_WEEKLY: (state, action) => {
            return {
                ...state,
                discover_weekly: action.payload.discover_weekly
            }
        }

    }


})

export const { SET_USER, SET_TOKEN, SET_PLAYLISTS, SET_DISCOVER_WEEKLY } = userSlice.actions
export default userSlice.reducer