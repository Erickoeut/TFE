import { useNavigate } from "react-router-dom"
import { getAllTeams } from "../../../../db/teams"
import style from "./team-index.module.scss"
const TeamCard = ({ name, logo, id }) => {
    const navigate = useNavigate()
    return (<>
        <div className={style.TeamCard} onClick={()=>navigate('/teams/'+id)} >
            <h2>{name}</h2>
            <img src={logo} alt="" />
        </div>
    </>)
}

function TeamsIndex() {
    const allTeams = getAllTeams()
    return (
        <div className={style.TeamsIndex}>
            <h1>TeamIndex</h1>
            {allTeams.map(team => <TeamCard key={team.id} {...team} />)}
        </div>
    )
}

export default TeamsIndex