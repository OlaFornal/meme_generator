import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  let url;

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
