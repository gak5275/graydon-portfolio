import React from "react";
import p1 from "../images/p1.JPG";
import p2 from "../images/p2.JPG";
import p3 from "../images/p3.JPG";
import p4 from "../images/p4.JPG";
import p5 from "../images/p5.JPG";
import p6 from "../images/p6.JPG";
import p7 from "../images/p7.JPG";
import p8 from "../images/p8.JPG";

const Photos = () => {
    return (
        <div className="green">
            <br/>
            <h2>Photos I Captured</h2>
            <p>These are photos that I took for a class during my Fall 2021 semester at Penn State Behrend. All photos (except the last one) were taken on the Behrend campus.</p>
            <figure>
                <img src={p1} alt="Photo 1" />
                <figcaption>This photo was taken at a high shutter speed.</figcaption>
            </figure>
            <figure>
                <img src={p2} alt="Photo 2" />
            </figure>
            <figure>
                <img src={p3} alt="Photo 3" />
                <figcaption>This photo was taken at a high shutter speed.</figcaption>
            </figure>
            <figure>
                <img src={p4} alt="Photo 4" />
            </figure>
            <figure>
                <img src={p5} alt="Photo 5" />
            </figure>
            <figure>
                <img src={p6} alt="Photo 6" />
            </figure>
            <figure>
                <img src={p7} alt="Photo 7" />
            </figure>
            <figure>
                <img src={p8} alt="Photo 8" />
                <figcaption>This photo was taken in my front yard.</figcaption>
            </figure>
            <br/>
        </div>
    );
};

export default Photos;