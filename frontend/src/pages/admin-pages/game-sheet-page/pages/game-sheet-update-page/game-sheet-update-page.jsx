import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import style from "./game-sheet-update-page.module.scss"

export default function GameSheetUpdatePage() {
    const { id } = useParams()
    const [game, setGame] = useState(null)
    const [team, setTeam] = useState([])
    const [selectedTeam, setSelectedTeam] = useState([])
    const user = useSelector(state => state.user.user)
    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate()
    const [requetOk, setRequetOk] = useState(false)
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:3000/api/teams/${user.teamId}`)
                .then(({ data }) => {
                    setTeam(data.players)
                    setSelectedTeam([])
                    setRequetOk(false)
                })
        }

    }, [user])

    const handleSelection = (p) => {
        const temp = structuredClone(team)
        const filtredTemp = temp.filter(player => player.id !== p.id)
        setTeam(filtredTemp)
        // const temp2 = structuredClone(selectedTeam)
        setSelectedTeam(selectedTeam => [...selectedTeam, p])
    }
    const handleRemove = (p) => {
        const temp = structuredClone(selectedTeam)
        const filtredTemp = temp.filter(player => player.id !== p.id)
        setSelectedTeam(filtredTemp)
        // const temp2 = structuredClone(selectedTeam)
        setTeam(team => [...team, p])
    }

    const handleRegisterTeam = () => {
        const playersId = selectedTeam.map(player => player.id)

        const body = {
            "teamId": parseInt(user.teamId),
            "playersIds": playersId
        }
        const config = {
            headers: {
                headers: { Authorization: `Bearer ${token}` }
            }
        }
        axios.put(`http://localhost:3000/api/games/${id}/teams`, body, config).then(() => {

            setRequetOk(true)
            navigate(-1)
        })
    }

    return (
        <div>
            <h1>Enregistrer une équipe</h1>

            {(selectedTeam.length < 6 || selectedTeam.length > 16) && <p>L'equipe doit avoir 6 joueurs minimum et 16 maximum </p>}
            {(selectedTeam.length >= 6) && (selectedTeam.length <= 16) && (!requetOk) && <button type="submit" onClick={handleRegisterTeam}>Enregistrer une équipe</button>}
            {requetOk && <p>L'equipe à été enregistrée <button onClick={() => navigate(`/results/${id}`)}>Aller au match</button></p>}
            <div className={style.lists}>
                <div>
                    <h2>Effectif disponible : {team.length}</h2>
                    <ul>
                        {team.map(player => <li key={player.id}>{player.firstName} {player.lastName} {player.position}  <button onClick={() => handleSelection(player)} >Sélectionner</button></li>)}
                    </ul>
                </div>
                <div>
                    <h2>
                        Joueurs selectionnés : {selectedTeam.length}
                    </h2>
                    <ul>
                        {selectedTeam.map(player => <li key={player.id}>{player.firstName} {player.lastName} {player.position}<button onClick={() => handleRemove(player)}>Enlever</button></li>)}
                    </ul>
                </div>
            </div>


        </div>
    )
}