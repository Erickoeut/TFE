import { Link, useParams } from "react-router-dom"

import axios from 'axios'
import style from "./results-details-page.module.scss"
import { useEffect, useState } from "react";

export default function ResultDetailsPage() {
    const { gameId } = useParams()
    const [game, setGame] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/${gameId}`)
            .then(({ data }) => {
                setGame(data)
            })
    }, [])


    return (
        game && (
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
                            {game.homeTeam.name}
                            <img src={game.homeTeam.team_logo} alt={`logo ${game.homeTeam.name}`} />
                        </div>
                        <div>
                            {game.homeScore} - {game.awayScore}
                        </div>
                        <div>
                            {game.awayTeam.name}
                            <img src={game.awayTeam.team_logo} alt={`logo ${game.awayTeam.name}`} />
                        </div>
                    </div>
                </div>

            </>)

    )
}