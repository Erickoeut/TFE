import { useParams } from "react-router-dom"
import { getOneGame } from "../../../../db/games";
import { getOneteam } from "../../../../db/teams";

import style from "./results-details-page.module.scss"

export default function ResultDetailsPage() {
    const { gameId } = useParams()
    const game = getOneGame(gameId)

    const home_team = getOneteam(game.home_team_id)
    const away_team = getOneteam(game.away_team_id)
    return (
        <>
            <h2>Result details</h2>

            <div className={style.resultDetails}>
                <div className={style.gameInfos}>
                    <p>
                        localisation : {game.localisation}
                    </p>
                    <p>
                        Tour {game.round}
                    </p>
                </div>
                <div className={style.gameResult}>
                    <div>
                        {home_team.name}
                        <img src={home_team.logo} alt={`logo ${home_team.name}`} />
                    </div>
                    <div>
                        {game.home_score}-{game.away_score}
                    </div>
                    <div>
                        {away_team.name}
                        <img src={away_team.logo} alt={`logo ${away_team.name}`} />
                    </div>
                </div>

            </div>
        </>
    )
}