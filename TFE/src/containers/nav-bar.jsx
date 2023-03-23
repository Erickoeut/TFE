import style from "./nav-bar.module.scss"

export default function NavBar() {
    return (
        <>
            <div className={style.navBar}>
                <div className={style.navLeft}>
                    <h1 className={style.logo}>Logo</h1>
                    <ul>
                        <li>Classement</li>
                        <li>Résultats</li>
                        <li>A propos</li>
                    </ul>
                </div>
                <p className={style.login}>
                    Login
                </p>
            </div>
        </>
    )
}