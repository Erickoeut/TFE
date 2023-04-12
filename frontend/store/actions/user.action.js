import { createAction } from '@reduxjs/toolkit';

export const userConnect = createAction('user/connect',(user)=>({
payload:{...user}
}))

export const userDisconnect = createAction('user/disonnect')