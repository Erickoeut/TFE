import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ResultUpdateDetailsPage() {
const {id} = useParams()
const [game,setGame]=useState(null)
const navigate = useNavigate()
useEffect(()=>{
    axios.get(`http://localhost:3000/api/games/${id}`)
    .then(({data})=>{
        setGame(data)
        console.log(data)
    })
},[])
const [status,setStatus]= useState(false)
    
    return (
        game&&<div>
            <h1>Modifier le resultat </h1>
            <button onClick={()=>navigate(-1)}>
                Retour
            </button>
            <div>
                <form action="">
                    <label htmlFor="">Score {game.homeTeam.teamName} </label>
                    <input type="number" name="" id="" />
                    <label htmlFor="">Score {game.awayTeam.teamName} </label>
                    <input type="number" name="" id="" />
                    <select name="" value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option value="false">Non joué</option>
                        <option value="true">Terminé</option>
                    </select>
                </form>
            </div>
            
        </div>
    )
}