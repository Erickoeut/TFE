import { getTeam } from "../../../../db/players"
import { useParams } from "react-router-dom"
import style from "./team-details-page.module.scss"
import { getOneteam } from "../../../../db/teams"
export default function TeamDetailsPage() {
    const { id } = useParams()
    const teamPlayers = getTeam(id)
    const team = getOneteam(id)

    return (
        <>
            <h1>Team details</h1>
            <div className={style.teamDetails} style={{
                backgroundImage: `url(${team.logo})`
            }}>

                <div>
                    <h2>{team.name}</h2>
                </div>
            </div>
            <div className={style.playerIndex}>
                {teamPlayers.map(player => (
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
                ))}
            </div>

        </>)
}