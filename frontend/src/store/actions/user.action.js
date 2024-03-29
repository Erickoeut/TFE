import { createAction } from '@reduxjs/toolkit';

export const userConnect = createAction('user/connect',(user)=>({
payload:{...user}
}))

export const userDisconnect = createAction('user/disconnect')

export const sideBarSwitch = createAction('activeSideBar/switch')