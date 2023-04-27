import style from "./about-6-page.module.scss"
import code3 from "../../../../assets/images/code-3.png"
import { useNavigate } from "react-router-dom"
export default function About6Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Le code</h1>
            <div className={style.AboutPage}>
                <img src={code3} alt="" />
                <div className={style.content}>
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/5')}>←</button>
                <button onClick={() => navigate('/about/7')}>→</button>
            </div>
        </div>
    )
}