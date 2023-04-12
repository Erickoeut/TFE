import { useId, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import style from "./login-page.module.scss"
import axios, { AxiosHeaders } from "axios"
import { userConnect } from "../../../store/actions/user.action"
import { useNavigate } from "react-router-dom"
export default function LoginPage() {
    const id = useId()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const userState = useSelector((state) => state.user)
    console.log(userState.user)
    const handleSetUsername = (e) => {
        setUsername(e.target.value)
        // console.log("handleSetUsername" + username);
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
        // console.log(password);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/api/auth/login",{
            "username":username,
            "password":password
        }).then(({data})=>{

            dispatch(userConnect(data))
            // navigate(-1)
        })
        // console.log("handleSubmit");
    }

    const handleBlopTest = (e) => {
        e.preventDefault();

        axios.get("http://localhost:3000/api/players", { headers: { 'Authorization': `Bearer ${userState.user.accessToken}`}}).then(data => {
            console.log(data)
        })
    }

    return (<>
        <h1>Login</h1>
        <form className={style.login} onSubmit={handleSubmit} action="" method="post">
            <div>
                <label htmlFor="username">identifiant</label>
                <input type="text" name="username" id="username" onChange={(e) => handleSetUsername(e)} />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={(e) => handleSetPassword(e)} value={password} />
            </div>
            <button type="submit">Se connecter</button>
        </form>
        <button onClick={(e) => handleBlopTest(e)}>DEMo</button>
    </>)
}