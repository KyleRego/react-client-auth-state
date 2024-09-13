import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthedContext } from "./AuthedContext";
import Nav from "./Nav";

export default function App() {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const isAuthenticated = true;
        setAuthed(isAuthenticated);
    }, []);

    return (
        <AuthedContext.Provider value={{ authed, setAuthed }}>
            <div className="App">
                <Nav />
                <Outlet />
            </div>
        </AuthedContext.Provider>
    );
}
