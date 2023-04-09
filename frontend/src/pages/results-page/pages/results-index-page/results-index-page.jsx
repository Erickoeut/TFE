import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import style from "./result-index-page.module.scss"
import axios from "axios"

export default function ResultIndexPage() {

    const [day, setDay] = useState(1)
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
        <div className={style.ResutltIndexPage}>
            <h2>Liste résultats</h2>
            <form action="">
                <select name="day" id="" onChange={handleSetDay}>
                    <option value="1">Journée 1</option>
                    <option value="2">Journée 2</option>
                </select>
            </form>
            {gameOfDay.map(game => <ResultRow key={game.id}{...game} />)}
        </div>
    )
}

function ResultRow({ id, home_team_id, away_team_id, home_score, away_score }) {
    const navigate = useNavigate()

    const [homeTeam, setHomeTeam] = useState(null)
    const [awayTeam, setAwayTeam] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:3000/api/teams`)
            .then(({ data }) => {
                // console.log(data);
                setHomeTeam(data.find(team=>team.id===home_team_id))
                setAwayTeam(data.find(team=>team.id===away_team_id))
            })
    //     // axios.get(`http://localhost:3000/api/teams/${away_team_id}`)
    //     //     .then(({ data }) => {
    //     //         console.log(data);
    //     //         setAwayTeam(data)
    //     //     })
    }, [])
    return (
        <div className={style.resultRow} onClick={() => navigate("/results/" + id)}>
            <div className={style.team}>{homeTeam&&homeTeam.team_name}</div>
            <div className={style.score}>{home_score} - {away_score}</div>
            <div className={style.team}>{awayTeam&&awayTeam.team_name}</div>
        </div>
    )
}