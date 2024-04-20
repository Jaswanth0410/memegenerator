import React from "react";
import memesData from "./memesadata";

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")

    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        // console.log(url)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" 
                className="form-input"  placeholder="Top text"/>
                <input type="text"
                className="form-input" placeholder="Bottom text" />
                <button className="form-btn" onClick={getMemeImage}>Get a meme image</button>
                <img src={memeImage} className="meme--image" />
            </div>
        </main>
    )
}