import style from "./about-5-page.module.scss"
import code2 from "../../../../assets/images/code-2.png"
import { useNavigate } from "react-router-dom"
export default function About5Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Le code</h1>
            <div className={style.AboutPage}>
                <img src={code2} alt="" />
                {/* <img src={code2} alt="" />
                <img src={code3} alt="" /> */}
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