import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function GameSheetIndexPage() {
    const user = useSelector(state => state.user.user)
    const [team,setTeam]=useState(null)
    const [homeGames, setHomeGames] = useState([])
    const [awayGames, setAwayGames] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/teams/${user.teamId}`)
            .then(({ data }) => {
                console.log(data);
                const dataTeam = {
                    teamName:data.teamName,
                    logo:data.teamLogo
                }
                setTeam({dataTeam})
                setHomeGames(data.homeGames)
                setAwayGames(data.awayGames)
            })
    }, [])
    
    return (
        <div>
            <h1>Liste des matchs de {}</h1>
            <h2>Matchs a domicile</h2>
            <ul>
                {homeGames && homeGames.map(g=> <li key={g.id}>Tour{g.round} vs {g.awayTeam.teamName} {!g.finish&&<button> <Link>Inscrire Equipe</Link> </button>}</li>)}
            </ul>
            <h2>Matchs à l'extérieur</h2>
            <ul>
                {awayGames && awayGames.map(g=> <li key={g.id}>Tour{g.round} vs {g.homeTeam.teamName} {!g.finish&&<button> <Link>Inscrire Equipe</Link> </button>}</li>)}
            </ul>
        </div>
        
    )
}  