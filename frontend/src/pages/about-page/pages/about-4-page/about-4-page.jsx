import style from "./about-4-page.module.scss"
import code1 from "../../../../assets/images/code-1.png"
import code2 from "../../../../assets/images/code-2.png"
import code3 from "../../../../assets/images/code-3.png"
import { useNavigate } from "react-router-dom"
export default function About4Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Le code : le front-end</h1>
            <div className={style.AboutPage}>
                <img src={code1} alt="" />
                {/* <img src={code2} alt="" />
                <img src={code3} alt="" /> */}
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