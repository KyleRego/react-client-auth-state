import { useContext } from "react"
import { AuthedContext } from "./AuthedContext"

export default function Login() {
    const { setAuthed } = useContext(AuthedContext);

    function login() {
        setAuthed(true);
    }

    return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button type="button" onClick={login}>Log in</button>
    </div>
}