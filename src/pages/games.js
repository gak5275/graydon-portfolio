import React from "react";
import erindefault from "../images/erindefault.png";
import logo2r from "../images/logo2r.png";

const Games = () => {
    return (
        <div className="purple">
            <br/>
            <h2>Games That I Have Made</h2>
            <p>These are video games or video game-like experiences that I have made or contributed to. Some of these projects may still be under active development.</p>
            <h3><u>The Insurance Game</u></h3>
            <figure>
                <img src={erindefault} className="erin" alt="Erin the Insurance Agent" />
                <figcaption>Art by Julian Giles</figcaption>
            </figure>
            <p>In a collaboration with an insurance company, three of my classmates and I created what we call <i>The Insurance Game</i>. It is a digital experience meant to teach users about insurance terms by using them in the context of a meeting with an agent.</p>
            <p><b><a href="https://gak5275.github.io/gak_repo2/InsuranceGame-1.1-web/index.html">Play on Github</a></b></p>
            <p><b><a href="https://graydonk.itch.io/the-insurance-game">Play on Itch.io</a></b></p>
            <h3><u>Everyday</u></h3>
            <figure>
                <img src={logo2r} className="portrait" alt="Everyday Logo" />
            </figure>
            <p><i>Everyday</i> is a visual novel game that I am currently developing. It follows a small cast of characters as they navigate through the ups and downs of working in the modern video game industry. I expect to have it complete by May 2024.</p>
            <p>Please look forward to the full release!</p>
            <h3>More to come in the future?</h3>
            <br/>
        </div>
    );
};

export default Games;