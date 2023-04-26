import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ResultUpdateDetailsPage() {
    const { id } = useParams()
    const [game, setGame] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/api/games/${id}`)
            .then(({ data }) => {
                setGame(data)
            })
    }, [])
    
    const [homeScore,setHomeScore]= useState("")
    const [awayScore,setAwayScore]= useState("")

    const [status, setStatus] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put('http://local')
    }

    return (
        game && <div>
            <h1>Modifier le resultat </h1>
            <button onClick={() => navigate(-1)}>
                Retour
            </button>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Score {game.homeTeam.teamName} </label>
                    <input type="number" value={homeScore} onChange={(e)=>setHomeScore(e.target.value)}/>
                    <label htmlFor="">Score {game.awayTeam.teamName} </label>
                    <input type="number" value={awayScore} onChange={(e)=>setAwayScore(e.target.value)}/>
                    <select name="" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="false">Non joué</option>
                        <option value="true">Terminé</option>
                    </select>
                    <button type="submit">Valider</button>
                </form>
            </div>

        </div>
    )
}