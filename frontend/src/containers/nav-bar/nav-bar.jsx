import style from "./nav-bar.module.scss"
import { Link, NavLink } from "react-router-dom"
export default function NavBar() {
    return (
        <>
            <div className={style.navBar}>
                <div className={style.navLeft}>
                    <Link to={"/"}>
                        <img src="https://touch-belgium.be/_nuxt/img/navbar-logo.0e3ed7d.png"/>
                    </Link>
                    <ul>
                        <li>
                            <NavLink to={"/ranking"}>
                                Classement
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/results"}>
                                Résultats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>
                                A propos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/teams"}>
                                Les équipes
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/login"} className={style.login}>
                    Login
                </Link>
            </div>
        </>
    )
}