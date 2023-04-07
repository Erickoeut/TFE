import { useNavigate } from "react-router-dom"
import { getAllGame } from "../../../../db/games"
import { getOneteam } from "../../../../db/teams"
import { useEffect, useState } from "react"

import style from "./result-index-page.module.scss"

export default function ResultIndexPage() {

    const games = getAllGame() //a remplacer en axios quand backend pret

    const [day, setDay] = useState(1)
    const [gameOfDay, setGameOfDay] = useState(games)

    useEffect(() => {
        const temp = structuredClone(games)
        setGameOfDay(temp.filter(game => game.round == day))
    }, [day])

    const handleSetDay = (e) => {
        setDay(e.target.value)
    }

    return (
        <>
            <h2>Liste résultats</h2>
            <form action="">
                <select name="day" id="" onChange={handleSetDay}>
                    <option value="1">Journée 1</option>
                    <option value="2">Journée 2</option>
                </select>
            </form>
            {gameOfDay.map(game => <ResultRow key={game.id}{...game} />)}
        </>
    )
}

function ResultRow({ id, home_team_id, away_team_id, home_score, away_score }) {
    const navigate = useNavigate()

    const home_team = getOneteam(home_team_id)
    const away_team = getOneteam(away_team_id)

    return (
        <div className={style.resultRow} onClick={() => navigate("/results/" + id)}>
            <div className={style.team}>{home_team.name}</div>
            <div className={style.score}>{home_score} - {away_score}</div>
            <div className={style.team}>{away_team.name}</div>
        </div>
    )
}