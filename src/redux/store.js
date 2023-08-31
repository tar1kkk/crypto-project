import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";
import userSlice from "./slices/userSlice";


export const store = configureStore({
        reducer: {
            itemsSlice,
            userSlice
        }
    });

