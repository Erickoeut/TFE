import { getTeam } from "../../../../db/players";
import style from "./team-details.module.scss"
export default function TeamDetails(){

        const teamPlayers = getTeam(1)
        console.log(teamPlayers);

    return(
        <>
        <h1>Team details</h1>
    <div className={style.TeamDetails}>
        {teamPlayers.map(player=><PlayerCard key={player.id}{...player} />)}
    </div>
        </>
    )
}

const PlayerCard=({first_name,last_name,position,age})=>{

    return(
        <div className={style.PlayerCard}>
        <h2>{first_name} {last_name}</h2>
        <p>{age} ans</p>
        <p>{position}</p>
        </div>
    )


}