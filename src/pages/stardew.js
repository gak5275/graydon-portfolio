import React from "react";
import Main_Logo from "../images/Main_Logo.png";
import runes from "../images/runes.png";

const Stardew = () => {
    return (
        <div>
            <h2>
                Other Websites I Have Made or Contributed to
            </h2>
            <h3><u>Stardew Valley Analysis</u></h3>
            <figure>
                <img src={Main_Logo} alt="Stardew Valley Logo" />
            </figure>
            <p>Myself and two classmates created a website on which we share our analysis of the video game Stardew Valley (my favorite game!). We looked at the text in the game's code and found recurring themes in the dialogue. We also looked at which characters have the most lines of dialogue in specific locations throughout the game.</p>
            <p><a href="https://gak5275.github.io/StardewDIGIT210/">View the site here!</a></p>

            <h3><u>A Tour of Viking Runes</u></h3>
            <figure>
                <img src={runes} alt="Viking Age Runes" />
            </figure>
            <p>This is a research project I did on runes from the age of the Vikings. We were required to make a unique component of our projects based on our individual talents, so I made mine a website with multiple pages.</p>
            <p><a href="https://gak5275.github.io/GK-CAMS109Yproject/">View the site here!</a></p>

            <h3>Writing</h3>
            <h3>More Beasts for Worse Children by Hilaire Belloc</h3>
        </div>
    );
};

export default Stardew;