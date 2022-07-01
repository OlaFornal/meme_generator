import React from "react";
import memesData from "../memesData.js";

let url;

function getMemeImage() {
  const memesArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memesArray.length);
  url = memesArray[randomNumber].url;
}

export default function Meme() {
  return (
    <main>
      <p>{url}</p>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}
