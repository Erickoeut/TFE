import { createReducer } from "@reduxjs/toolkit"
import { sideBarSwitch, userConnect, userDisconnect } from "../actions/user.action"

const initialState =
{
    user: null,
    activeSideBar:false
}

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(userConnect, (state, action) => {
            state.user = action.payload
        })
        .addCase(userDisconnect, (state,action) => {
            console.log('tete');
            state.user = null
            state.activeSideBar =false
        })
        .addCase(sideBarSwitch,(state,action)=>{
            state.activeSideBar = !state.activeSideBar
        })
})

export default userReducer