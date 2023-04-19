import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import style from "./result-index-page.module.scss"
import axios from "axios"

export default function ResultIndexPage() {

    const [round, setRound] = useState(1)
    const [nbRound, setNbRound] = useState([])
    const [gameOfDay, setGameOfDay] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/season/1`)
            .then(({ data }) => {
                const tab = []
                for (let i = 1; i <= data.nbOfRound; i++) {
                    tab.push(i)
                }
                setNbRound(tab)
                
            })
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/season/1/round/${round}`)
            .then(({ data }) => {
                setGameOfDay(data)
            })
    }, [round])

    const handleSetRound = (e) => {
        setRound(e.target.value)
    }

    return (
        nbRound && <div>
            <h1>Resultats</h1>
            <div className={style.ResutltIndexPage}>
                <form action="">
                    <select name="day" id="selectDay" onChange={handleSetRound}>
                        {nbRound.map(r => <option key={r} value={r}>Tour {r}</option>)}
                    </select>
                </form>
                <div className={style.resultIndex}>
                    {gameOfDay.map(game => <ResultRow key={game.id}{...game} />)}
                </div>
            </div>
        </div>
    )
}

function ResultRow({ id, homeTeam, awayTeam, homeScore, awayScore }) {
    const navigate = useNavigate()
    return (
        <div className={style.resultRow} onClick={() => navigate("/results/" + id)}>
            <div className={style.team}>{homeTeam.teamName}</div>
            <div className={style.score}>{homeScore} - {awayScore}</div>
            <div className={style.team}>{awayTeam && awayTeam.teamName}</div>
        </div>
    )
}