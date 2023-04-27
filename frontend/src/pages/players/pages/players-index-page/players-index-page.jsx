import axios from "axios"
import { useEffect, useState } from "react"
import style from "./players-index-page.module.scss"
import PlayerCard from "../../../../components/player-card/player-card"



export default function PlayerIndexPage() {

    const [players, setPlayers] = useState([])
    const [teams,setTeams] = useState([])
    const [playersSelected, setPlayersSelected] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/players')
            .then(({ data }) => {
                setPlayers(data)
                setPlayersSelected(data)
            })
        axios.get('http://localhost:3000/api/teams')
            .then(({data})=>{
                setTeams(data)
            })
    }, [])

    const [filterTeam,setFilterTeam]= useState("")
    const handleFilterTeam = (e) => {
        setFilterTeam(e.target.value)
    }
    const [filterPosition,setFilterPosition]= useState("")
    const handleFilterPosition = (e) => {
        setFilterPosition(e.target.value)
    }
    const handleSubmitFilter = (e)=>{
        e.preventDefault()
        setPlayersSelected(structuredClone(players)) 
        
        const temp = structuredClone(players)
        let teamFiltredTemp
        let positionFiltredTemp

        if(filterTeam!==""){
            console.log(filterTeam);
            teamFiltredTemp=structuredClone(temp.filter(player=>player.team.id === parseInt(filterTeam))) 
        }
        else teamFiltredTemp=temp
        if(filterPosition!==""){
            positionFiltredTemp=structuredClone(teamFiltredTemp.filter(player=>player.position===filterPosition))
        }
        else positionFiltredTemp=structuredClone(teamFiltredTemp)
        setPlayersSelected(positionFiltredTemp)
    }
    
    return (<div>
        <h1>Les Joueurs</h1>
        <form onSubmit={handleSubmitFilter}>
            <select name="" id="" value={filterTeam} onChange={handleFilterTeam}>
                <option value="">--choisir une équipe</option>
                {teams.map(team=><option key={team.id}value={team.id}>{team.teamName}</option>)}
            </select>
            <select value={filterPosition} onChange={handleFilterPosition}>
                <option value="" >--Choisir un poste</option>
                <option value="middle">Middle</option>
                <option value="link">Link</option>
                <option value="wing">Wing</option>
            </select>
            <button type="submit">Appliquer filtre</button>
        </form>
        <div className={style.playerIndex}>
            {playersSelected.map(player => <PlayerCard key={player.id}{...player} team={player.team} />)}
        </div>
    </div>
    )
}

