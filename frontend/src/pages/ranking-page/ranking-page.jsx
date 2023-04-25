import { useEffect, useState } from "react"
import axios from 'axios'
import style from './ranking-page.module.scss'
import { useNavigate } from "react-router-dom"
export default function RankingPage() {
    const [ranking, setRanking] = useState([])
    const [seasonDetail,setSeasonDetails]= useState(null)
    useEffect(() => {
        axios.get('http://localhost:3000/api/seasons/1/ranking')
            .then(({ data }) => {
                setRanking(data.ranking)
                setSeasonDetails({year:data.year})
            })
    }, [])
    return (
        <div >
            {seasonDetail&&<h1>Classement saison {seasonDetail.year}-{seasonDetail.year+1}</h1>}
            <div className={style.RankingPage}>
                <table>
                    <thead>
                        <tr>
                            
                            <th colSpan='3'>Equipe</th>
                            
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

const RankingRow = ({ i, id,teamLogo,teamName, gamePlayed, teamPoints, win, draw, lost, scoreFor, scoreAgainst, scoreDifference }) => {
    const navigate = useNavigate()
    return (
        <tr>
            <td>{i + 1}</td>
            <td><img className={style.teamLink} src={teamLogo} alt="" onClick={()=>navigate(`/teams/${id}`)} /></td>
            <td className={style.teamLink} onClick={()=>navigate(`/teams/${id}`)}>{teamName}</td>
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