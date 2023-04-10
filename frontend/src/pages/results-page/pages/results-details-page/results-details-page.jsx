import { Link, useParams } from "react-router-dom"

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
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/teams`)
            .then(({ data }) => {
                if (game) {
                    // console.log(data);
                    setHomeTeam(data.find(team => team.id == game.home_team_id))
                    setAwayTeam(data.find(team => team.id == game.away_team_id))
                }
            })

    }, [game])


    return (
        game && homeTeam && awayTeam && (
            <>
                <h2>Result details</h2>
                <Link to={'/results'}> <button>Retour</button> </Link>
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
                            <img src={homeTeam.team_logo} alt={`logo ${homeTeam.name}`} />
                        </div>
                        <div>
                            {game.home_score}-{game.away_score}
                        </div>
                        <div>
                            {awayTeam.name}
                            <img src={awayTeam.team_logo} alt={`logo ${awayTeam.name}`} />
                        </div>
                    </div>
                </div>

            </>)

    )
}