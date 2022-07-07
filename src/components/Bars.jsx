import React from "react";


function Bars(props) {
    const start1 = () => {
        const audio1 = new Audio(
            "./sounds/bvng.mp3"
        );
        audio1.play();
    };
    const start2 = () => {
        const audio2 = new Audio(
            "./sounds/crfo.mp3"
        );
        audio2.play();
    };
    const start3 = () => {
        const audio3 = new Audio(
            "./sounds/dtse.mp3"
        );
        audio3.play();
    };
    const start4 = () => {
        const audio4 = new Audio(
            "./sounds/edqt.mp3"
        );
        audio4.play();
    };
    const start5 = () => {
        const audio5 = new Audio(
            "./sounds/ldcc.mp3"
        );
        audio5.play();
    };
    const start6 = () => {
        const audio6 = new Audio(
            "./sounds/peoi.mp3"
        );
        audio6.play();
    };
    const start7 = () => {
        const audio7 = new Audio(
            "./sounds/tena.mp3"
        );
        audio7.play();
    };
    const start8 = () => {
        const audio8 = new Audio(
            "./sounds/udgb.mp3"
        );
        audio8.play();
    };


    return (
        <main className="container">
            <button className="bar c1" onMouseEnter={start1}>C</button>
            <button className="bar d" onMouseEnter={start2}>D</button>
            <button className="bar e" onMouseEnter={start3}>E</button>
            <button className="bar f" onMouseEnter={start4}>F</button>
            <button className="bar g" onMouseEnter={start5}>G</button>
            <button className="bar a" onMouseEnter={start6}>A</button>
            <button className="bar b" onMouseEnter={start7}>B</button>
            <button className="bar c2" onMouseEnter={start8}>C</button>
        </main>
    )
}

export default Bars;