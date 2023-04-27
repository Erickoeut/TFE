import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function PlayerDetailPage() {
    const [player, setPlayer] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/api/players/${id}`)
            .then(({ data }) => {
                setPlayer(data)
            })
    }, [])
    return (
        player && <div>
            <h1>{player.firstName} {player.lastName}</h1>
            <p>
                Sexe : {player.gender=="Male"?"Homme":"Femme"}
            </p>
            <p>
                Age : {player.age} ans
            </p>
            <p>
                Position : {player.position}
            </p>
            <p>
                Club : {player.team.teamName}
            </p>
                        
        </div>
    )
}