import { useId, useState } from "react"

export default function LoginPage() {
    const id = useId()

    const [username, setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleSetUsername = (e) => {
        setUsername(e.target.value)
        console.log("handleSetUsername"+username);
    }
    const handleSetPassword = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit");
    }
    return (<>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">identifiant</label>
                <input type="text"name="username" id="username" onChange={(e)=>handleSetUsername(e)}/>
            </div>
            <div>
        <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" onChange={(e)=>handleSetPassword(e)} value={password} />
            </div>
            <button type="submit">Se connecter</button>
        </form>
    </>)
}