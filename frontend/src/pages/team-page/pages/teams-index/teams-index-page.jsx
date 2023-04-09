import { useNavigate } from "react-router-dom"
import axios from 'axios'
import style from "./team-index-page.module.scss"
import { useEffect, useState } from "react"
const TeamCard = ({ team_name, team_logo, id }) => {
    const navigate = useNavigate()
    return (<>
        <div className={style.TeamCard} onClick={() => navigate('/teams/' + id)} >
            <h2>{team_name}</h2>
            <img src={team_logo} alt="" />
        </div>
    </>)
}

function TeamsIndexPage() {
    const [allTeams,setAllTeams] = useState([])    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/teams")
            .then(({data})=>{
                setAllTeams(data)
            })
    },[])

    return (
        <div>
            <h2>Team Index</h2>
            <div className={style.TeamsIndex}>
                {allTeams.map(team => <TeamCard key={team.id} {...team} />)}
            </div>
        </div>
    )
}

export default TeamsIndexPage