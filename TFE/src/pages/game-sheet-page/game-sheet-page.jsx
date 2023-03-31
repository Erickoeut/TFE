import { useState } from "react"
import { getTeam } from "../../db/players";

export default function GameSheetPage({team_id}){
    const [team,SetTeam]=useState([])
    const oneTeam= getTeam(1)
    console.log(oneTeam);
    return(
        <>
        <div>
            oneTeam
        </div>
        </>
    )
}