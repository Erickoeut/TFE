import axios from "axios"
import { useEffect, useState } from "react"
import style from "./players-page.module.scss"
import PlayerCard from "../../components/player-card/player-card"
export default function PlayerPage() {
    const [players, setPlayers] = useState([])
    const [playersSelected, setPlayersSelected] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/players')
            .then(({ data }) => {
                setPlayers(data)
                setPlayersSelected(data)
            })
    }, [])

    const handleResetFiltre = ()=>{
        setPlayersSelected(structuredClone(players))
    }

    return (<div>
        <h1>Les Joueurs</h1>
        <form>
            <select name="" id="">
                <option value={1}>Celtics</option>
            </select>
            <select>
                <option value="">Middle</option>
            </select>
            <button onClick={handleResetFiltre}>Reset Filtres</button>
        </form>
        <div className={style.playerIndex}>
            {playersSelected.map(player => <PlayerCard key={player.id}{...player} />)}
        </div>
    </div>
    )
}

