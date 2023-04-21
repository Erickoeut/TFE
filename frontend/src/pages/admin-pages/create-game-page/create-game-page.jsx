import axios from "axios"
import { useEffect, useId, useState } from "react"

export default function CreateGamePage() {
    const id = useId()
    const [teams, setTeams] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/teams')
            .then(({ data }) => {
                setTeams(data)
            })
    }, [])
    const [year, setYear] = useState(2022)
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [homeTeamId, setHomeTeamId] = useState(1)
    const [awayTeamId, setAwayTeamId] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit');
    }
    return (
        <div >
            <h1>Create Game Page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Informations sur le match</h2>
                        <div>
                            <label htmlFor="">Saison : </label>
                            <input type="number" placeholder="2022 = saison 2022-2023" />
                        </div>
                        <div>
                            <label htmlFor="">Tour : </label>
                            <input type="number" placeholder="2022 = saison 2022-2023" />
                        </div>
                        <div>
                            <label htmlFor="">Lieu : </label>
                            <input type="text" value={location} onChange={(e) => { setLocation(e.target.value); console.log(location); }} />
                        </div>
                        <input type="date" value={date} name="" id="" onChange={(e) => { setDate(e.target.value); console.log(date); }} />

                    </div>
                    <div>
                        <h2>Les équipes</h2>
                        <select name="" id="">
                            {teams.map(team => (<option key={team.id} value={team.id}>{team.teamName}</option>))}
                        </select>
                        <select name="" id="">
                            {teams.map(team => (<option key={team.id} value={team.id}>{team.teamName}</option>))}
                        </select>
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}