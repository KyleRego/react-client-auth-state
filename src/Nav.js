import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthedContext } from "./AuthedContext";

export default function Nav() {
    const { authed, setAuthed } = useContext(AuthedContext);

    function handleLogout() {
        // Post to server to log out; on success:
        setAuthed(false);
    }

    return (
        <nav style={{display: "flex", columnGap: "3rem", padding: "1rem", backgroundColor: "pink"}}>
            <Link to={"/"}>Home</Link>
            {authed ?
                    <AuthedContent handleLogout={handleLogout} />
                    :
                    <NotAuthedContent />
            }
        </nav>
    );
}

function AuthedContent({handleLogout}) {
    return <>
        <button type="button" onClick={handleLogout}>Log out</button>
    </>
}

function NotAuthedContent() {
    return <>
        <Link to={"/register"}>Register</Link>

        <Link to={"/login"}>Login</Link>
    </>
}