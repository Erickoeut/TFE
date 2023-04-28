import style from "./about-7-page.module.scss"
import pp from "../../../../assets/images/touch-fond-2.jpg"

import { useNavigate } from "react-router-dom"

export default function About7Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>La suite</h1>
            <div className={style.AboutPage}>
                <img src={pp} alt="" />
                <div className={style.content}>
                    <h2>Les axes d'améliorations</h2>
                    <ul>
                        <li>Ajout d'infos supplémentaires pour les équipes et les joueurs</li>
                        <li>Hash des mots de passes et mise en place des rôles</li>
                        <li>Ajout des actualités dans DB et sur homePage</li>
                    </ul>
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/6')}>←</button>
                <button onClick={() => navigate('/about/8')}>→</button>
            </div>
        </div>
    )
}