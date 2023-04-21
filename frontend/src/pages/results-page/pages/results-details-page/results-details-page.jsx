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
    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/${gameId}`)
            .then(({ data }) => (
                {
                    round:data.round,
                    localisation:data.localisation,
                    type:data.type,
                    date:new Date(data.date).toLocaleDateString('fr-BE'),
                    homeScore:data.homeScore,
                    awayScore:data.awayScore,
                    finish:data.finish,
                    awayTeam:data.awayTeam,
                    homeTeam:data.homeTeam
                }))
            .then(result=>{
                // console.log(result);
                setGame(result)
                axios.get(`http://localhost:3000/api/weather/${result.localisation}`)
                    .then(({ data }) => {
                        setWeather(data)
                    })
                    .catch((err)=>{console.log(err.response.data.message);})
                }
            )
            }, [])

    return (
        game  && (
            <div>
                <div className={style.title}>
                    <h1>Result details</h1>
                    <Link to={'/results'}>
                        <FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
                    </Link>
                </div>
                
                <div className={style.resultDetails}>
                    <div className={style.gameInfos}>
                        <p>
                            Tour {game.round}
                        </p>
                        <p>
                            {game.date}
                        </p>
                        <p>
                            localisation : {game.localisation}
                        </p>
                        {weather&&<div>
                            <p>
                                meteo actuelle:
                            </p>
                            <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="weather-icon" />
                            <p> {weather.skyMeteo} , température : {weather.temp} °C </p>
                        </div>}
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
            </div>)
    )
}