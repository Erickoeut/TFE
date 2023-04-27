import { useNavigate } from "react-router-dom"
import style from "./about-1-page.module.scss"
import pp from "../../../../assets/images/photo_eric.jpg"

export default function About1Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails} >
            <h1>Le Projet</h1>
            <div className={style.About1Page}>
                <div>
                    <img src={pp} alt="" />
                </div>
                <div>
                    <h2>Le touch</h2>
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/')}>←</button>
                <button onClick={() => navigate('/about/2')}>→</button>
            </div>
        </div>
    )
}