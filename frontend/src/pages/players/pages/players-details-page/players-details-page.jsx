import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import style from "./players-details-page.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
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
            <Link to={-1}>
                <FontAwesomeIcon icon={faArrowLeftLong} size="xl" />
            </Link>
            <div className={style.playerDetails}>

                <ul>
                    <li>
                        Sexe : {player.gender == "Male" ? "Homme" : "Femme"}
                    </li>
                    <li>
                        Age : {player.age} ans
                    </li>
                    <li>
                        Position : {player.position}
                    </li>
                    <li>
                        Club : {player.team.teamName}
                    </li>
                </ul>
            </div>


        </div>
    )
}