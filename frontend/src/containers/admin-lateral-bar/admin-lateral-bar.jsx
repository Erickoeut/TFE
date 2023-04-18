import { Link } from 'react-router-dom'
import style from './admin-lateral-bar.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from "axios"
export default function AdminLateralBar(){
    const user=useSelector(state=>state.user.user)
    const [team,setTeam]=useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/teams/${user.teamId}`)
            .then(({data})=>{
                setTeam(data)
            })
    },[])
    return(
        <div className={style.AdminLateralBar}>
            <h1>Admin lateral bar</h1>
            {team&&<h2>{team.teamName}</h2>}
            <Link to={"game-sheet"} >Feuilles de match</Link>
            <Link to={"create-game"}>Creer un match</Link>
            
        </div>
    )
}