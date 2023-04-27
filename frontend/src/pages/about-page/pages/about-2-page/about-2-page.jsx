import style from "./about-2-page.module.scss"
import react from "../../../../assets/images/react.png"
import nest from "../../../../assets/images/nest.jpeg"
import sql from "../../../../assets/images/sql-server.svg"

import { useNavigate } from "react-router-dom"
export default function About2Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Les technologies</h1>
            <div className={style.AboutPage}>

                <div>
                    <img src={react} alt="" />
                    <img src={nest} alt="" />
                    <img src={sql} alt="" />

                </div>

            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/1')}>←</button>
                <button onClick={() => navigate('/about/3')}>→</button>
            </div>
        </div>
    )
}