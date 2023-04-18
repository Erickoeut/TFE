import {configureStore} from "@reduxjs/toolkit"
import reduxLogger from 'redux-logger';
import userReducer from "./reducers/user.reducer";
const store = configureStore({
    reducer:{
        user:userReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    // middleware : (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
})

export default store