import { useState } from "react"
import style from "./player-card.module.scss"

export default function PlayerCard  ({ firstName, lastName, position, age,team }) {
    const normal={}
    const over={
        backgroundColor:team.mainColor,
        color:team.secondColor
    }
    const [back,setBack]=useState(normal)
    return (
        <>
            <div className={style.playerCard} style={back} onMouseEnter={()=>setBack(over)} onMouseLeave={()=>setBack(normal)} >
                <h2>
                    {firstName} {lastName.toUpperCase()}
                </h2>
                <p>
                    {position}
                </p>
                <p>
                    {age} ans
                </p>
            </div>
        </>
    )
}