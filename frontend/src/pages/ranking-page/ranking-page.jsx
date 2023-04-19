import { useEffect, useState } from "react"
import axios from 'axios'
import style from './ranking-page.module.scss'
export default function RankingPage() {
    const [ranking, setRanking] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/season/1/ranking')
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
                        <tr>
                            <th></th>
                            <th>Equipe</th>
                            <th>Pts</th>
                            <th>Joués</th>
                            <th>G</th>
                            <th>N</th>
                            <th>P</th>
                            <th>+</th>
                            <th>-</th>
                            <th>diff</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {ranking.map((team, i) => <RankingRow key={team.id}{...team} i={i} />)}
                    </tbody>
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
            <td>{teamPoints}</td>
            <td>{gamePlayed}</td>
            <td>{win}</td>
            <td>{draw}</td>
            <td>{lost}</td>
            <td>{scoreFor}</td>
            <td>{scoreAgainst}</td>
            <td>{scoreDifference}</td>
        </tr>
    )
}