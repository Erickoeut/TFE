import { useParams } from "react-router-dom"

import axios from 'axios'
import style from "./results-details-page.module.scss"
import { useEffect, useState } from "react";

export default function ResultDetailsPage() {
    const { gameId } = useParams()
    const [game, setGame] = useState(null)
    const [homeTeam, setHomeTeam] = useState(null)
    const [awayTeam, setAwayTeam] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/${gameId}`)
            .then(({ data }) => {
                setGame(data)
            })
            axios.get(`http://localhost:3000/api/teams`)
            .then(({ data }) => {
                setHomeTeam(data)
            })
    }, [])

    useEffect(() => {
            axios.get(`http://localhost:3000/api/teams/${game.away_team_id}`)
            .then(({ data }) => {
                setAwayTeam(data)
            })
        return setGame(null)
    }, [game])


    return (
        <>
            {/* <h2>Result details</h2>
            <div className={style.resultDetails}>
                <div className={style.gameInfos}>
                    <p>
                        localisation : {game.localisation}
                    </p>
                    <p>
                        Tour {game.round}
                    </p>
                </div>
                <div className={style.gameResult}>
                    <div>
                        {homeTeam.name}
                        <img src={homeTeam.logo} alt={`logo ${homeTeam.name}`} />
                    </div>
                    <div>
                        {game.home_score}-{game.away_score}
                    </div>
                    <div>
                        {away_team.name}
                        <img src={awayTeam.logo} alt={`logo ${awayTeam.name}`} />
                    </div>
                </div>

            </div> */}
        </>
    )
}