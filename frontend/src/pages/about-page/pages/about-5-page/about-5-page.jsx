import style from "./about-5-page.module.scss"
import zeTeam from "../../../../assets/images/zeTeam.jpg"
import { useNavigate } from "react-router-dom"
export default function About5Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Remerciments</h1>
            <div className={style.AboutPage}>
                <img src={zeTeam} alt="" />
                <div className={style.content}>
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/4')}>←</button>
                <button onClick={() => navigate('/about/6')}>→</button>
            </div>
        </div>
    )
}