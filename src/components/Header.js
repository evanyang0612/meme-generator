import React from "react";
import trollFace from "../images/troll-face.webp";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project by Evan Yang</h4>
    </header>
  );
}
