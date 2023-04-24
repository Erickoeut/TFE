import { useNavigate } from "react-router-dom"
import axios from 'axios'
import style from "./team-index-page.module.scss"
import { useEffect, useState } from "react"


export default function TeamsIndexPage() {
    const [allTeams, setAllTeams] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/teams")
            .then(({ data }) => {
                setAllTeams(data)
            })
    }, [])

    return (
        <div>
            <h1>Les Clubs</h1>
            <div className={style.TeamsIndex}>
                {allTeams.map(team => <TeamCard key={team.id} {...team} />)}
            </div>
        </div>
    )
}

const TeamCard = ({ teamName, teamLogo, id,mainColor,secondColor }) => {
    const navigate = useNavigate()
    const normal={}
    const over={
        backgroundColor:mainColor,
        color:secondColor
    }
    const [back,setBack]=useState(normal)
    return (<>
        <div className={style.TeamCard } style={back} onMouseEnter={()=>setBack(over)} onMouseLeave={()=>setBack(normal)} onClick={() => navigate('/teams/' + id)} >
            <h2>{teamName}</h2>
            <img src={teamLogo} alt="" />
        </div>
    </>)
}