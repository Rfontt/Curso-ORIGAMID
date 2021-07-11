import React, { useState, useRef } from 'react';
import './styles/CarouselSlick.css';

export default function CarouselSlick() {
    const [ accountant, setAccount ] = useState(0);
    const ref = useRef(null);

    let languages = [
        { name: 'JavaScript'},
        { name: 'Java'},
        { name: 'TypeScript'},
        { name: 'Python'},
    ]

    if(accountant === languages.length) {
        setAccount(0);
    }

    function addCounter() {
        setAccount(accountant + 1);
        
    }

    return(
        <div className="Container-Global">
            <div className="Slick-Container">
                <div className="Carousel-Slick">Hello</div>
                <div className="Carousel-Slick">Hello</div>
                <div className="Carousel-Slick">Hello</div>
            </div>

            <div className="Slicks">
                <button onClick={addCounter}></button>
                <button onClick={addCounter}></button>
                <button onClick={addCounter}></button>
            </div>
        </div>
    )
}