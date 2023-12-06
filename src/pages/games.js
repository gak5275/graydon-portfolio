import React from "react";
import erindefault from "../images/erindefault.png";

const Games = () => {
    return (
        <div>
            <h2>Games That I Have Made</h2>
            <h3><u>The Insurance Game</u></h3>
            <figure>
                <img src={erindefault} className="erin" alt="Erin the Insurance Agent" />
                <figcaption>Art by Julian Giles</figcaption>
            </figure>
            <p>In a collaboration with an insurance company, three of my classmates and I created what we call <i>The Insurance Game</i>. It is a digital experience meant to teach users about insurance terms by using them in the context of a meeting with an agent.</p>
            <p><a href="https://gak5275.github.io/gak_repo2/InsuranceGame-1.1-web/index.html">Play on Github</a></p>
            <p><a href="https://graydonk.itch.io/the-insurance-game">Play on Itch.io</a></p>
            <h3><u>Everyday</u></h3>
            <p>Coming soon!</p>
        </div>
    );
};

export default Games;