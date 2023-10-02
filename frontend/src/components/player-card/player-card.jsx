import { useState } from "react"
import style from "./player-card.module.scss"
import { useNavigate } from "react-router-dom"

export default function PlayerCard  ({ firstName, lastName, position, age,team ,id}) {
    const navigate = useNavigate()
    const normal={}
    const over={
        backgroundColor:team.mainColor,
        color:team.secondColor
    }
    const [back,setBack]=useState(normal)
    return (
        <>
            <div onClick={()=>navigate(`/players/${id}`)} className={style.playerCard} style={back} onMouseEnter={()=>setBack(over)} onMouseLeave={()=>setBack(normal)} >
                <h2>
                    {firstName} {lastName.toUpperCase()}
                </h2>
                <p>
                    {position}
                </p>
                <p>
                    Club : {team.teamName} 
                </p>
            </div>
        </>
    )
}