import React from "react";

export default function Meme(){

    // current meme
    const [meme, setMeme] = React.useState({
        topText :"",
        bottomText :"",
        randomImage:""
    });
    // for array of all memes
    const [allMemes, setAllMemes] = React.useState([]); 

    function getMemeImage(){
        // gen random num
        const randomNum = Math.floor(Math.random() * allMemes.length);
        const url = meme[randomNum].url;  
        //updating state with new url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <div className="form">
                <div className="label">
                    <label className="form-label">Top text</label>
                    <input className="form-input" 
                           placeholder="Shut up" 
                           type="text" />
                </div>

                <div className="label">
                    <label className="form-label">Bottom text</label>
                    <input className="form-input" 
                           placeholder="and take my money" type="text" />
                </div>

                <button 
                    className="form-button"
                    onClick = {getMemeImage} >
                    Get a new meme template
                </button>

                <div className="meme">
                    <img className="meme-img" src={meme.randomImage}/>
                    <h2 className="meme-text" >{meme.topText}</h2>
                    <h2 className="meme-text" > {meme.bottomText}</h2>

                </div>
        </div>
    )
}