import React from "react";
import portrait from "../images/portrait.jpg";

const Home = () => {
    return (
        <div className="blue">
            <br/>
            <h2>Home</h2>
            <p>Welcome to my digital portfolio! Here you will find some of my favorite digital projects that I have created and contributed to while in the DIGIT Program at Penn State Behrend.</p>
            <h4>About Me</h4>
            <p>My name is Graydon Kupfer, and I am currently a senior at Penn State Behrend. I am majoring in <b>Digital Media, Arts, and Technology</b> and minoring in <b>Game Development</b>. I am also a peer tutor, the secretary of the Digital Creations Club, and a Schreyer Honors student. In my free time, I like to play video games and listen to music.</p>
            <h4>What's in my Portfolio</h4>
            <p>in my digital portfolio you will find:</p>
            <ul>
                <li>My resume</li>
                <li>Photos I have taken</li>
                <li>Photoshop/Illustrator projects I have made</li>
                <li>Other websites I have created or contributed to</li>
                <li>Games I have created or contributed to</li>
            </ul>
            <figure>
                <img src={portrait} className="portrait" alt="Self-Portrait" />
                <figcaption>This is a self-portrait that I made in a graphic design class.</figcaption>
            </figure>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Home;