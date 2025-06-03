import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        gptMovies: null
        
    },
    reducers:{
        toggleGptSearchView:(state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGPTMovieResult: (state,action) => {
            state.gptMovies = action.payload;
        }
    }
})

export const {toggleGptSearchView, addGPTMovieResult} = gptSlice.actions;

export default gptSlice.reducer