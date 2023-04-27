import imgTouch from "../../assets/images/touch-fond-1.jpeg"
import style from "./welcome-page.module.scss"
function WelcomePage(){
    return(
        <div className={style.WelcomePage}>
            <h1>Bienvenue sur mon projet de fin de formation</h1>
            <img src={imgTouch} alt="" />
        </div>
    )
}
export default WelcomePage