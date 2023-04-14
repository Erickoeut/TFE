import { createReducer } from "@reduxjs/toolkit"
import { userConnect } from "../actions/user.action"

const initialState = 
{
    user:null
    // {accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjgxNDgxMjMyfQ.vT47Nj7P6aFQdjjbMHSYbyo_gGpEpRHli6DXP5dJiCw",
    //     teamId: 1,
    //     username: "user1"
    // }
}

const userReducer = createReducer(initialState,builder=>{
    builder
        .addCase(userConnect,(state,action)=>{
            state.user = action.payload
        })
})

export default userReducer