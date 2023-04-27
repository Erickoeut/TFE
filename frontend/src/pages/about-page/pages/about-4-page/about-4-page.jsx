import style from "./about-4-page.module.scss"
// import uml from "../../../../assets/images/uml.png"
import { useNavigate } from "react-router-dom"
export default function About4Page(){
    const navigate = useNavigate()
    return(<div className={style.aboutDetails} >
    <h1>Le Code</h1>
    <div className={style.About1Page}>
        <div>
            {/* <img src={uml} alt="" /> */}
        </div>
        <div>
            <h2>Le touch</h2>
        </div>
    </div>
    <div className={style.buttons}>
        <button onClick={() => navigate('/about/2')}>←</button>
        <button onClick={() => navigate('/about/4')}>→</button>
    </div>
</div>)
}