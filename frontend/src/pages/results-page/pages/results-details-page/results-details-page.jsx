import { Link, useParams } from "react-router-dom"

import axios from 'axios'
import style from "./results-details-page.module.scss"
import { useEffect, useState } from "react";

export default function ResultDetailsPage() {
    const { gameId } = useParams()
    const [game, setGame] = useState(null)
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/${gameId}`)
            .then(({ data }) => {
                setGame(data)
                axios.get(`http://localhost:3000/api/weather/${data.localisation}`)
                    .then(({ data }) => {
                        setWeather(data)
                    })
            })
    }
        , [])

    return (
        game && weather && (
            <>
                <h2>Result details</h2>
                <Link to={'/results'}> <button>Retour</button> </Link>
                <div className={style.resultDetails}>
                    <div className={style.gameInfos}>
                        <p>
                            Tour {game.round}
                        </p>
                        <p>
                            {/* {game.date} */}
                        </p>
                        <p>
                            localisation : {game.localisation}
                        </p>
                        <div>
                            <p>
                                meteo actuelle:
                            </p>
                            <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="weather-icon" />
                            <p> {weather.skyMeteo} , température : {weather.temp} °C </p>
                        </div>
                    </div>
                    <div className={style.gameResult}>
                        <div>
                            {game.homeTeam.teamName}
                            <img src={game.homeTeam.teamLogo} alt={`logo ${game.homeTeam.name}`} />
                        </div>
                        <div>
                            {game.homeScore} - {game.awayScore}
                        </div>
                        <div>
                            {game.awayTeam.teamName}
                            <img src={game.awayTeam.teamLogo} alt={`logo ${game.awayTeam.name}`} />
                        </div>
                    </div>
                </div>
            </>)
    )
}