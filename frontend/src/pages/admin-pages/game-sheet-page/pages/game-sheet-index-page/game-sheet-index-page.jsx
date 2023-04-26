import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import style from "./game-sheet-index-page.module.scss"
export default function GameSheetIndexPage() {
    const user = useSelector(state => state.user.user)
    const [team, setTeam] = useState(null)
    const [homeGames, setHomeGames] = useState([])
    const [awayGames, setAwayGames] = useState([])
    useEffect(() => {
        if (user) {

            axios.get(`http://localhost:3000/api/teams/${user.teamId}`)
                .then(({ data }) => {
                    const dataTeam = {
                        teamName: data.teamName,
                        logo: data.teamLogo
                    }
                    setTeam(dataTeam)
                    setHomeGames(data.homeGames)
                    setAwayGames(data.awayGames)
                })
        }
    }, [user])

    return (
        user && team && <div >
            <h1>Liste des matchs de {team.teamName}</h1>
            <div className={style.GameSheetIndexPage}>
                <h2>Matchs a domicile</h2>
                <table>
                    <thead>

                        <tr>
                            <td>Tour</td>
                            <td>Adversaire</td>
                            <td>Status equipe</td>
                            <td>Status Match</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>


                        {homeGames && homeGames.map(g => (
                            <tr key={g.id}>
                                <td>{g.round}</td>
                                <td>{g.awayTeam.teamName}</td>
                                {g.homePlayers.length > 0 ? <td> Equipe enregistrée</td> : <td>Non enregistrée</td>}
                                {!g.finish ? <td>Non Joué</td> : <td>Terminé</td>}
                                {g.homePlayers.length > 0 ? <td><Link to={`/results/${g.id}`}>Aller au match</Link></td> : <td><Link to={`${g.id}`}>Inscrire Equipe</Link></td>}
                            </tr>))}


                    </tbody>
                </table>
                <h2 >Matchs a l'extérieur</h2>
                <table>
                    <thead>

                        <tr>
                            <td>Tour</td>
                            <td>Adversaire</td>
                            <td>Status equipe</td>
                            <td>Status Match</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {awayGames && awayGames.map(g => (
                            <tr key={g.id}>
                                <td>{g.round}</td>
                                <td>{g.homeTeam.teamName}</td>
                                {g.awayPlayers.length > 0 ? <td> Equipe enregistrée</td> : <td>Non enregistrée</td>}
                                {!g.finish ? <td>Non Joué</td> : <td>Terminé</td>}
                                {g.awayPlayers.length > 0 ? <td><Link to={`/results/${g.id}`}>Aller au match</Link></td> : <td><Link to={`${g.id}`}>Inscrire Equipe</Link></td>}
                            </tr>))}
                    </tbody>
                </table>

            </div>
        </div>

    )
}  