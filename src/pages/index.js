import React from "react";
import portrait from "../images/portrait.jpg";

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to my digital portfolio! Here you will find some of my favorite digital projects that I have worked on and created while in the DIGIT Program at Penn State Behrend.</p>
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