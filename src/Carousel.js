import { useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
    useEffect(() => {
        const slider = document.getElementById("slider");
        const sliderItems = document.getElementById("slides");
        const prev = document.getElementById("carousel-prev");
        const next = document.getElementById("carousel-next");
    });

    const slide = (wrapper, items, prev, next) => {
        let posInitial,
            index = 0,
            allowShift = true;

        const slides = items.getElementsByClassName("slide");
        const slidesLength = slides.length;
        const slideSize = slides[0].offsetWidth;
        const firstSlide = slides[0];
        const lastSlide = slides[slidesLength - 1];
        const cloneFirst = firstSlide.cloneNode(true);
        const cloneLast = lastSlide.cloneNode(true);
    };

    return (
        <div
            id="slider"
            className="slider"
            style={{ "margin-left": "5px", "margin-right": "5px" }}
        >
            <div className="wrapper">
                <button className="carousel-prev"></button>
                <div className="slides">
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
                <button className="carousel-next"></button>
            </div>
        </div>
    );
};

export default Carousel;
