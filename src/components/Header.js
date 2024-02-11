import React from "react";
import memeface from "../img/meme-face.png";
import github from "../img/github.svg";

export default function Header(){
    return(
        <header className="header">
            <img className="header-img" src={memeface} alt="meme-face" />
            <h2 className="header-title">Meme Creator</h2>
            <a href="https://github.com/prabh-sharan/meme-generator-react">
                <img className ="header-icon" src = {github} alt="github code" /> 
            </a>
        </header>
    )
}