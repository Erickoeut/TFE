import axios from "axios"
import { useEffect, useState } from "react"
import style from "./players-page.module.scss"
export default function PlayerPage(){
    const [players,setPlayers]=useState([])
    const [playersSelected,setPlayersSelected]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/api/players')
            .then(({data})=>{
                setPlayers(data)
                setPlayersSelected(data)
            })
    },[])
    
    return(<div className={style.playerIndex}>
        {players.map(player => <PlayerCard key={player.id}{...player} />)}
    </div>)
}

const PlayerCard = ({ firstName, lastName, position, age }) => {
    return (
        <>
            <div className={style.playerDetails}>
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