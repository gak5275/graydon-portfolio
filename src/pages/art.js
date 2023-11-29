import React from "react";
import Sketch5copy from '../images/Sketch5copy.jpg';
import Sketch6copy from '../images/Sketch6copy.jpg';
import Sketch7copy from '../images/Sketch7copy.jpg';
import Sketch8copy from '../images/Sketch8copy.jpg';

const Art = () => {
    return (
        <div>
            <h1>Photoshop Projects from ART 168</h1>
            <p>These are projects that I made for my Digital Media class using Adobe Photoshop. In this class, we learned how to use new tools in Photoshop each week and are tasked with creating "sketches" using those tools (basically just taking a pre-existing image and editing it). These are a few of mine that I thought turned out well.</p>
            <img src={Sketch5copy} alt="Sketch 5" />
            <p>For this sketch, I added scanlines to the image and gave the palm tree a glitch effect.</p>
            <img src={Sketch6copy} alt="Sketch 6" />
            <p>For this sketch, I added a corruption/static effect to the TV and tinted the image blue.</p>
            <img src={Sketch7copy} alt="Sketch 7" />
            <p>In this sketch, I burred the background of the image to put more emphasis on the Empire State Building.</p>
            <img src={Sketch8copy} alt="Sketch 8" />
            <p>In this sketch, I burred the background of the image to put more emphasis on the lightning strike.</p>

        </div>
    );
};

export default Art;