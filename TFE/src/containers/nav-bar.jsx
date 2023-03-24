import style from "./nav-bar.module.scss"
import { NavLink } from "react-router-dom"
export default function NavBar() {
    return (
        <>
            <div className={style.navBar}>
                <div className={style.navLeft}>
                    <h1 className={style.logo}>Logo</h1>
                    <ul>
                        <li>
                            <NavLink to={""}>
                                Classement
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={""}>
                                Résultats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={""}>
                                A propos
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <p className={style.login}>
                    Login
                </p>
            </div>
        </>
    )
}