import { useNavigate } from "react-router-dom"

export default function ResultIndexPage() {
    const navigate = useNavigate()
    return (
        <>
            <h2>Liste résultats</h2>
            <div onClick={()=>navigate("/results/1")}>
                <div>
                    Equipe 1
                </div>
                <div>
                    21-1
                </div>
                <div>
                    Equipe 2
                </div>
            </div>
            <div>
                <div>
                    Equipe 1
                </div>
                <div>
                    3-1
                </div>
                <div>
                    Equipe 2
                </div>
            </div>
            <div>
                <div>
                    Equipe 1
                </div>
                <div>
                    2-11
                </div>
                <div>
                    Equipe 2
                </div>
            </div>
            <div>
                <div>
                    Equipe 1
                </div>
                <div>
                    1-1
                </div>
                <div>
                    Equipe 2
                </div>
            </div>

        </>
    )
}