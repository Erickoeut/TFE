import { Link, useParams } from "react-router-dom"
import style from "./team-details-page.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"

export default function TeamDetailsPage() {

    const { id } = useParams()
    const [team, setTeam] = useState(null)
    useEffect(() => {
        axios.get(`http://localhost:3000/api/teams/${id}`)
            .then(({ data }) => {
                setTeam(data)
            })
    }, [])

    return (
        team && <div>
            <h1>{team.teamName}</h1>
            <Link to={'/teams'}> <button>Retour</button> </Link>
            <div className={style.teamDetails}>
                <div>
                    
                    {<img src={team.teamLogo} alt="" />}
                </div>
            </div>
            <div className={style.playerIndex}>
                {team.players.map(player => <PlayerCard key={player.id}{...player} />)}
            </div>
        </div>
    )
}

const PlayerCard = ({ firstName, lastName, position, age }) => {
    return (
        <>
            <div className={style.playerDetails}>
                <h2>
                    {firstName} {lastName.toUpperCase()}
                </h2>
                <p>
                    {position}
                </p>
                <p>
                    {age} ans
                </p>
            </div>
        </>
    )
}