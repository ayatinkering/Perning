import { useState } from "react";

export const Login=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    const handleClick=()=>{
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <>
        <button onClick={handleClick}>{isLoggedIn ? "Logout" : "login"}</button>
        </>
    );
}