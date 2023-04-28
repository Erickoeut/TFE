import { Link, useParams } from "react-router-dom"
import style from "./team-details-page.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import PlayerCard from "../../../../components/player-card/player-card"

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
            <Link to={-1}>
                <FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
            </Link>
            <div className={style.teamDetails}>
                <div>
                    {<img src={team.teamLogo} alt="" />}
                </div>
            </div>
            <div className={style.playerIndex}>
                {team.players.map(player => <PlayerCard key={player.id}{...player} team={team}/>)}
            </div>
        </div >
    )
}

