import { createReducer } from "@reduxjs/toolkit"
import { userConnect } from "../actions/user.action"

const initialState = {
    user:null
}

const userReducer = createReducer(initialState,builder=>{
    builder
        .addCase(userConnect,(state,action)=>{
            state.user = action.payload
        })
})

export default userReducer