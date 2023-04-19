import axios from "axios"
import { useEffect, useState } from "react"

export default function CreateGamePage(){
    const [teams,setTeams]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/api/teams')
            .then(({data})=>{
                setTeams(data)
            })
    },[])
    const[homeTeamId,setHomeTeamId]=useState(null)
    return(
        <div >
            <h1>Create Game Page</h1>
            <div>
                <form action="">
                    <input type="text" />
                    <input type="date" name="" id="" />
                    <select name="" id="">
                        {teams.map(team=>(<option key={team.id} value={team.id}>{team.teamName}</option>))}
                    </select>
                    <select name="" id="">
                        {teams.map(team=>(<option key={team.id} value={team.id}>{team.teamName}</option>))}
                    </select>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}