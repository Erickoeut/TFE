import { useDispatch } from "react-redux"
import style from "./nav-bar.module.scss"
import { Link, NavLink } from "react-router-dom"
import { sideBarSwitch } from "../../store/actions/user.action"
export default function NavBar({ user }) {
    const dispatch = useDispatch()
    return (
        <>
            <header className={style.navBar}>

                <Link to={"/"}>
                    <img src="https://touch-belgium.be/_nuxt/img/navbar-logo.0e3ed7d.png" />
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
                        <NavLink to={"/teams"}>
                            Les équipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/players"}>
                            Les joueurs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
                {user ? <h2 onClick={()=>dispatch(sideBarSwitch())}>{user.username}</h2> : <Link to={"/login"} className={style.login}>Login</Link>}


            </header>
        </>
    )
}