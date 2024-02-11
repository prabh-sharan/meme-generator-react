import React from "react";
import ReactDOM from "react";

export default function Meme(){

    // current meme state
    const [meme, setMeme] = React.useState({
        topText :"",
        bottomText :"",
        randomImage:""
    });
    // for array of all memes
    const [allMemes, setAllMemes] = React.useState([]); 


    /*async function automatically returns a promise instead of a function or nothing.
    So, if we use async inside of useEffect,we need to define the function separately 
    inside of the call-back function */
    React.useEffect( () =>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes"); // imgflip API for memes
            const data = await res.json() ; //conv it to json 
            setAllMemes(data.data.memes);
        }
        getMemes();  //callback
    },[]);

    function getMemeImage(){
        // gen random num
        const randomNum = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNum].url;  
        //updating state with new url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    // input change event
    function handleInputChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <div className="form">
                <div className="label">
                    <label className ="form-label">Top text</label>
                    <input className = "form-input" 
                           placeholder ="Shut up" 
                           type ="text"
                           name ="topText"
                           value = {meme.topText}
                           onChange = {handleInputChange} />
                </div>

                <div className="label">
                    <label className ="form-label">Bottom text</label>
                    <input className ="form-input" 
                           placeholder ="and take my money"
                           type ="text"
                           name = "bottomText"
                           value = {meme.bottomText}
                           onChange = {handleInputChange} />
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