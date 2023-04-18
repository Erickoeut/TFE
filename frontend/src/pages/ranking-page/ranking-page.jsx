import { useEffect, useState } from "react"
import axios from 'axios'
import style from './ranking-page.module.scss'
export default function RankingPage() {
    const [ranking, setRanking] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/season/ranking')
            .then(({ data }) => {
                setRanking(data)
            })
    }, [])
    return (
        <div >
            <h1>Ranking page</h1>
            <div className={style.RankingPage}>
                <table>
                    <thead>
                        <td>Classement</td>
                        <td>Equipe</td>
                        <td>Joués</td>
                        <td>Pts</td>
                        <td>G</td>
                        <td>N</td>
                        <td>P</td>
                        <td>+</td>
                        <td>-</td>
                        <td>diff</td>
                    </thead>
                    {ranking.map((team, i) => <RankingRow key={team.id}{...team} i={i} />)}
                </table>
            </div>
        </div>
    )
}

RankingPage.defaultProps = {
    ranking: []
}

const RankingRow = ({ i, teamName, gamePlayed, teamPoints, win, draw, lost, scoreFor, scoreAgainst, scoreDifference }) => {
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{teamName}</td>
            <td>{gamePlayed}</td>
            <td>{teamPoints}</td>
            <td>{win}</td>
            <td>{draw}</td>
            <td>{lost}</td>
            <td>{scoreFor}</td>
            <td>{scoreAgainst}</td>
            <td>{scoreDifference}</td>
        </tr>
    )
}