// import { getTeam } from "../../../../db/players"
import { Link, useNavigate, useParams } from "react-router-dom"
import style from "./team-details-page.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
//import { getOneteam } from "../../../../db/teams"
export default function TeamDetailsPage() {

    const {id} = useParams()
    const [team, setTeam] = useState(null)
    const [teamPlayers, setTeamPlayers] = useState([])
    useEffect(() => {
        Promise.all([
            axios.get(`http://localhost:3000/api/teams/${id}`),
            axios.get(`http://localhost:3000/api/players/team/${id}`)
        ])
            .then(axios.spread((res1, res2) => {
                setTeam(res1.data)
                setTeamPlayers(res2.data)
            }))
    }, [])

    return (
        <>
            <h2>Team details</h2>
            <Link to={'/teams'}> <button>Retour</button> </Link>
            <div className={style.teamDetails}>

                <div>
                    <h2>{team && team.team_name}</h2>
                    {team && <img src={team.team_logo} alt="" />}
                </div>
            </div>
            <div className={style.playerIndex}>
                {teamPlayers && (teamPlayers.map(player => (
                    <div key={player.id} className={style.playerDetails}>
                        <h2>
                            {player.first_name} {player.last_name.toUpperCase()}
                        </h2>
                        <p>
                            {player.position}
                        </p>
                        <p>
                            {player.age} ans
                        </p>
                    </div>
                )))}
            </div>
        </>)
}