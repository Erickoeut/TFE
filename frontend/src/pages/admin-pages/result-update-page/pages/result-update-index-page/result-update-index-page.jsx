import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function ResultUpdateIndexPage() {
    const [games, setGames] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/seasons/1')
            .then(({ data }) => {
                setGames(data.games)
            })
    }, [])
    return (
        <div>
            <h1>Result update page</h1>
            <div>
                {games.map(game => <ResultRow key={game.id} {...game} />)}
            </div>
        </div>
    )
}
const ResultRow = ({ round, homeTeam, awayTeam ,id}) => {
    const navigate = useNavigate()
    return (
        <div >
            Tour {round}  :  {homeTeam.teamName}-{awayTeam.teamName}
            <button onClick={()=>navigate(`${id}`)}>Modifier</button>
        </div>
    )
}