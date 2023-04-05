import { useParams } from "react-router-dom"
import { getOneGame } from "../../../../db/games";

export default function ResultDetailsPage() {
    const {gameId} = useParams()
    const game = getOneGame(gameId)
    console.log(game);
    return (
        <>
            <h2>details</h2>
            <div>
                Equipe 1
            </div>
            <div>
                21-1
            </div>
            <div>
                Equipe 2
            </div>
        </>
    )
}