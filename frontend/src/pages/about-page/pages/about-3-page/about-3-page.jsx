import { useNavigate } from 'react-router-dom'
import style from './about-3-page.module.scss'
import uml from "../../../../assets/images/uml.png"
export default function About0Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>Les données</h1>
            <div className={style.AboutPage}>

            <div>
                    <img src={uml} alt="" />
                </div>

            </div>
            <div className={style.buttons}>
            <button onClick={() => navigate('/about/2')}>←</button>
                <button onClick={() => navigate('/about/4')}>→</button>
            </div>
        </div>
    
    )
}