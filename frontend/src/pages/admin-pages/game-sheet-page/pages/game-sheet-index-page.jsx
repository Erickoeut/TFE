import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function GameSheetIndexPage() {
    const user = useSelector(state => state.user.user)
    const [games, setGames] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/team/${user.teamId}`)
            .then(({ data }) => {
                console.log(data);
                setGames(data)
            })
    }, [])
    
    return (
        <div>
            <h1>test</h1>
            <h2>Matchs a domicile</h2>
            <ul>
                {games.homeGames && games.homeGames.map(game => <li key={game.id}>Tour{game.round} vs {game.awayTeam.teamName} {!game.finish&&<button> <Link>Inscrire Equipe</Link> </button>}</li>)}
            </ul>
            <h2>Matchs à l'extérieur</h2>
            <ul>
                {games.awayGames && games.awayGames.map(game => <li key={game.id}>Tour{game.round} vs {game.homeTeam.teamName}</li>)}
            </ul>
        </div>
        
    )
}  