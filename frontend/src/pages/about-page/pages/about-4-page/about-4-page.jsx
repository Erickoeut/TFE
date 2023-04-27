import style from "./about-4-page.module.scss"
import zeTeam from "../../../../assets/images/zeTeam.jpg"
import { useNavigate } from "react-router-dom"
export default function About4Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Remerciments</h1>
            <div className={style.AboutPage}>
            
                <div className={style.content}>
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/3')}>←</button>
                <button onClick={() => navigate('/about/5')}>→</button>
            </div>
        </div>
    )
}