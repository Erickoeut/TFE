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
<<<<<<< HEAD:TFE/src/pages/team-page/pages/teams-index/teams-index.jsx
            <h1>Team Index</h1>
        <div className={style.TeamsIndex}>
            {allTeams.map(team => <TeamCard key={team.id} {...team} />)}
        </div>
=======
            <h1>TeamIndex</h1>
            <div className={style.TeamsIndex}>
                {allTeams.map(team => <TeamCard key={team.id} {...team} />)}
            </div>
>>>>>>> 49dd177b27c689f83e522e45c61087434b200e26:TFE/src/pages/team-page/pages/teams-index/teams-index-page.jsx
        </>
    )
}

export default TeamsIndexPage