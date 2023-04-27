import { useNavigate } from 'react-router-dom'
import pp from '../../../../assets/images/photo_eric.jpg'
import style from './about-0-page.module.scss'

export default function About0Page() {
    const navigate = useNavigate()
    return (
        <div className={style.aboutDetails}>
            <h1>A propos</h1>
            <div className={style.AboutPage}>
                <div>
                    <img src={pp} alt="" />
                </div>
                <div className={style.content}>
                    <h2>Eric KOEUT - Développeur JavaScript FullStack</h2>
                    <ul>
                        <li>Français</li>
                        <li>32 ans</li>
                        <li>Ixelles</li>
                        <li>Formation universitaire en Ingénierie mécanique</li>
                        <li>Dessinateur industriel en reconversion</li>
                    </ul>
                </div>
            </div>
            <div className={style.buttons}>
                <button onClick={() => navigate('/about/1')}>→</button>
            </div>
        </div>
    )
}