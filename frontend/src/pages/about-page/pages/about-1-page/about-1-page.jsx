import { useNavigate } from "react-router-dom"
import style from "./about-1-page.module.scss"
import pp from "../../../../assets/images/touch-fond-1.jpeg"

export default function About1Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Le Projet</h1>
            <div className={style.AboutPage}>
                <div className={style.content}>
                    <h2>Site du championnat de rugby touch</h2>
                    <ul>
                        <li>Gestion du championnat</li>
                        <li>Accès aux infos des équipes et des joueurs</li>
                        <li>Création des rencontres</li>
                        <li>Mise a jours des rencontres</li>
                        <li>Ajout des joueurs aux feuilles de match </li>
                        <li>API météo par le back-end </li>
                    </ul>
                </div>
                <div>
                    <img src={pp} alt="" />
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/')}>←</button>
                <button onClick={() => navigate('/about/2')}>→</button>
            </div>
        </div>
    )
}