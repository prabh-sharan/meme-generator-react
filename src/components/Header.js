import React from "react";
import memeface from "../img/meme-face.png";

export default function Header(){
    return(
        <header className="header">
            <img className="header-img" src={memeface} alt="meme-face" />
            <h2 className="header-title">Meme Creator</h2>
            <h3>Download</h3>
        </header>
    )
}