
import style from "./welcome-page.module.scss"
function WelcomePage(){
    return(
        <div className={style.WelcomePage}>
            <h1>Welcome page</h1>
            <p>Bienvenue sur le site représentant mon projet de fin d'étude</p>
        </div>
    )
}
export default WelcomePage