import { Link, useParams } from "react-router-dom"

import axios from 'axios'
import style from "./results-details-page.module.scss"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ResultDetailsPage() {
    const { gameId } = useParams()
    const [game, setGame] = useState(null)
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/${gameId}`)
            .then(({ data }) => ({
                round: data.round,
                location: data.location,
                type: data.type,
                date: new Date(data.date).toLocaleDateString('fr-BE'),
                homeScore: data.homeScore,
                awayScore: data.awayScore,
                finish: data.finish,
                awayTeam: data.awayTeam,
                homeTeam: data.homeTeam,
                homePlayers: data.homePlayers,
                awayPlayers: data.awayPlayers
            }))
            .then(result => {
                setGame(result)
                axios.get(`http://localhost:3000/api/weather/${result.location}`)
                    .then(({ data }) => {
                        setWeather(data)
                    })
                    .catch((err) => { setError(err.response.data.message) })
                    .finally(setLoading(false))
            })
    }, [])

    return (
        game && (
            <div>
                <div className={style.title}>
                    <h1>Result details</h1>
                    <Link to={'/results'}>
                        <FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
                    </Link>
                </div>

                <div className={style.resultDetails}>
                    <div className={style.gameInfos}>
                        <div>
                            <p>
                            Tour {game.round}
                        </p>
                        <p>
                            {game.date}
                        </p>
                        <p>
                            localisation : {game.location}
                        </p>
                        </div>
                        
                        {weather && <div>
                            meteo actuelle:
                            <p>     <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="weather-icon" />
                            </p>
                            <p> {weather.skyMeteo} , température : {weather.temp} °C </p>
                        </div>}
                    </div>
                    <div className={style.gameResult}>
                        <div>
                            <div>
                                <h2>{game.homeTeam.teamName}</h2>
                                <img src={game.homeTeam.teamLogo} alt={`logo ${game.homeTeam.name}`} />

                            </div>
                            <div>
                                {game.homePlayers.map(player => <p key={player.id}>{player.firstName} {player.lastName.toUpperCase()}</p>)}
                            </div>
                        </div>
                        <div>
                            {game.homeScore} - {game.awayScore}
                        </div>
                        <div>
                            <div>
                                <h2>{game.awayTeam.teamName}</h2>
                                <img src={game.awayTeam.teamLogo} alt={`logo ${game.awayTeam.name}`} />
                            </div>
                            <div>

                                {game.awayPlayers.map(player => <p key={player.id}>{player.firstName} {player.lastName.toUpperCase()}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    )
}