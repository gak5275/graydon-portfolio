import React from "react";
import Main_Logo from "../images/Main_Logo.png";

const Stardew = () => {
    return (
        <div>
            <h1>
                Stardew Valley Analysis
            </h1>
            <img src={Main_Logo} alt="Stardew Valley Logo" />
            <p>Myself and two classmates created a website on which we share our analysis of the video game Stardew Valley. We looked at the text in the game's code and found recurring themes in the dialogue. We also looked at which characters have the most lines of dialogue in specific locations throughout the game.</p>
            <p><a href="https://gak5275.github.io/StardewDIGIT210/">View the site here!</a></p>
        </div>
    );
};

export default Stardew;