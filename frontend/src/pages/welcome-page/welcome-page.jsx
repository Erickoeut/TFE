import GameSheetPage from "../game-sheet-page/game-sheet-page"
import style from "./welcome-page.module.scss"
function WelcomePage(){
    return(
        <div className={style.WelcomePage}>
            <h1>Welcome page</h1>
            <GameSheetPage/>
        </div>
    )
}
export default WelcomePage