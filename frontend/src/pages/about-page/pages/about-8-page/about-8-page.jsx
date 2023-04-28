import style from "./about-8-page.module.scss"
import zeTeam from "../../../../assets/images/zeTeam.jpg"
import actiris from "../../../../assets/images/actiris.png"
import bf from "../../../../assets/images/bxl-formation-logo.png"
import DC from "../../../../assets/images/digitalcity.png"
import bstorm from "../../../../assets/images/bstorm.png"
import { useNavigate } from "react-router-dom"

export default function About8Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Remerciements</h1>
            <div className={style.AboutPage}>
                <img src={zeTeam} alt="" />
                <div className={style.content}>
                    <img src={actiris} alt="" />
                    <img src={bf} alt="" />
                    <img src={DC} alt="" />
                    <img src={bstorm} alt="" />
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/7')}>←</button>
                {/* <button onClick={() => navigate('/about/6')}>→</button> */}
            </div>
        </div>
    )
}