import style from "./player-card.module.scss"

export default function PlayerCard  ({ firstName, lastName, position, age }) {
    return (
        <>
            <div className={style.playerDetails}>
                <h2>
                    {firstName} {lastName.toUpperCase()}
                </h2>
                <p>
                    {position}
                </p>
                <p>
                    {age} ans
                </p>
            </div>
        </>
    )
}