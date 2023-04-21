import { Link, useNavigate } from 'react-router-dom'
import style from './admin-lateral-bar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from "axios"
import { userDisconnect } from '../../store/actions/user.action'
export default function AdminLateralBar(){
    const user=useSelector(state=>state.user.user)
    const [team,setTeam]=useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/teams/${user.teamId}`)
            .then(({data})=>{
                setTeam(data)
            })
    },[])
    const handleDisconnect = ()=>{
        localStorage.removeItem("token")
        dispatch(userDisconnect())
        console.log("handleDisconnect");
        navigate('/')

    }
    return(
        <div className={style.AdminLateralBar}>
            <h2>Admin lateral bar</h2>
            {team&&<h2>{team.teamName}</h2>}
            <Link to={"game-sheet"} >Feuilles de match</Link>
            <Link to={"create-game"}>Creer un match</Link>
            <button onClick={handleDisconnect}>Déconexion</button>
            
        </div>
    )
}