import { Link } from 'react-router-dom'
import style from './admin-lateral-bar.module.scss'
export default function AdminLateralBar(){
    return(
        <div className={style.AdminLateralBar}>
            <h1>Admin lateral bar</h1>

            <Link>Feuilles de match</Link>
            
        </div>
    )
}