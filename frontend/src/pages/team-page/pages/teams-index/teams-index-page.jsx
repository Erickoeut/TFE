import { useNavigate } from "react-router-dom"
import { getAllTeams } from "../../../../db/teams"
import style from "./team-index-page.module.scss"
const TeamCard = ({ name, logo, id }) => {
    const navigate = useNavigate()
    return (<>
        <div className={style.TeamCard} onClick={() => navigate('/teams/' + id)} >
            <h2>{name}</h2>
            <img src={logo} alt="" />
        </div>
    </>)
}

function TeamsIndexPage() {
    const allTeams = getAllTeams()
    return (
        <>
            <h1>Team Index</h1>
            <div className={style.TeamsIndex}>
                {allTeams.map(team => <TeamCard key={team.id} {...team} />)}
            </div>
        </>
    )
}

export default TeamsIndexPage