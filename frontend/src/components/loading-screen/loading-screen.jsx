import style from './loading-screen.module.css';

const LoadingScreen = () => (
    <div className={style['lds-roller']}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
);

export default LoadingScreen;