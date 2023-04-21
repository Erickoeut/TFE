import axios from "axios"
import { useEffect, useId, useState } from "react"
import style from "./create-game-page.module.scss"
export default function CreateGamePage() {
    const id = useId()
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/teams')
            .then(({ data }) => {
                setTeams(data)
            })
    }, [])
    const [year, setYear] = useState('')
    const [round, setRound] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [homeTeamId, setHomeTeamId] = useState(1)
    const [awayTeamId, setAwayTeamId] = useState(1)
    const tokenJson = JSON.parse(localStorage.getItem('token'))
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/api/games', {
            "seasonYear": parseInt(year),
            "round": parseInt(round),
            "localisation": location,
            "date": date.toString(),
            "homeTeamId": parseInt(homeTeamId),
            "awayTeamId": parseInt(awayTeamId),
            headers: {
                'Authorization': `Bearer ${tokenJson}`
            }
        }).then((res) => {
                setYear('')
                setRound('')
                setDate('')
            }
            )

    }
    return (
        <div>
            <h1>Nouveau match</h1>
            <div className={style.CreateGamePage} >
                <form onSubmit={handleSubmit}>

                    <h2>Informations sur le match</h2>
                    <div>
                        <label htmlFor="">Saison : </label>
                        <input type="number" value={year} onChange={(e) => { setYear(e.target.value) }} placeholder="2022 = saison 2022-2023" />
                    </div>
                    <div>
                        <label htmlFor="">Tour : </label>
                        <input type="number" value={round} onChange={(e) => setRound(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Lieu : </label>
                        <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                    </div>
                    <div>
                        <label htmlFor="">Date</label>
                        <input type="date" value={date} name="" id="" onChange={(e) => { setDate(e.target.value) }} />
                    </div>

                    <h2>Les équipes</h2>
                    <div>
                        <select value={homeTeamId} onChange={(e) => { setHomeTeamId(e.target.value) }} id="">
                            {teams.map(team => (<option key={team.id} value={team.id}>{team.teamName}</option>))}
                        </select>
                    </div>
                    <div>

                        <select value={awayTeamId} onChange={(e) => { setAwayTeamId(e.target.value) }} id="">
                            {teams.map(team => (<option key={team.id} value={team.id}>{team.teamName}</option>))}
                        </select>
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}