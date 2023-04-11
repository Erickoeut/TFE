import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import style from "./result-index-page.module.scss"
import axios from "axios"

export default function ResultIndexPage() {

    const [day, setDay] = useState(2)
    const [gameOfDay, setGameOfDay] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/round/${day}`)
            .then(({ data }) => {
                setGameOfDay(data)
            })
    }, [day])

    const handleSetDay = (e) => {
        setDay(e.target.value)
    }

    return (
        <>
            <h2>Liste résultats</h2>
            <div className={style.ResutltIndexPage}>
                <form action="">
                    <select name="day" id="selectDay" onChange={handleSetDay}>
                        <option value="1">Journée 1</option>
                        <option value="2">Journée 2</option>
                    </select>
                </form>
                {gameOfDay.map(game => <ResultRow key={game.id}{...game} />)}
            </div>
        </>
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