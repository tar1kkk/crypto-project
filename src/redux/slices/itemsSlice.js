import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchItems = createAsyncThunk('items/fetch',async (params)=>{
    const {data} = axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`);
    return data;
})


const initialState = {
    items : [],
    status : 'loading',
}

const itemsSlice = createSlice({
    name : 'items',
    initialState,
    reducers : {
        setItems(state,action){
            state.items = action.payload;
        },
    },extraReducers : {
        [fetchItems.fulfilled](state,action){
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchItems.pending](state,action){
            state.status = 'loading';
        },
        [fetchItems.rejected](state,action){
            state.status = 'rejected';
        },
    }

})