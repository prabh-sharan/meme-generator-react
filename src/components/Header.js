import React from "react";
import memeface from "../img/meme-face.png";

export default function Header(){
    return(
        <header className="header">
            <img src={memeface} alt="meme-face" />
            <h2>Meme Generator</h2>
            <h3></h3>
        </header>
    )
}