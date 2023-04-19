import { createReducer } from "@reduxjs/toolkit"
import { userConnect, userDisconnect } from "../actions/user.action"

const initialState =
{
    user: null
}

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(userConnect, (state, action) => {
            state.user = action.payload
        })
        .addCase(userDisconnect, (state,action) => {
            console.log('tete');
            state.user = null
        })
})

export default userReducer