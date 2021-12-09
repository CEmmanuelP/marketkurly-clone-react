import { useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
    useEffect(() => {
        const slider = document.getElementById("slider");
        const sliderItems = document.getElementById("slides");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        slide(slider, sliderItems, prev, next);
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

        // Clone first and last slide
        items.appendChild(cloneFirst);
        items.insertBefore(cloneLast, firstSlide);
        wrapper.classList.add("loaded");

        // Click events
        prev.addEventListener("click", () => {
            shiftSlide(-1);
        });
        next.addEventListener("click", () => {
            shiftSlide(-1);
        });

        const checkIndex = () => {
            items.classList.remove("shifting");

            if (index === -1) {
                items.style.left = -(slidesLength * slideSize) + "px";
                index = slidesLength - 1;
            }

            if (index === slidesLength) {
                items.style.left = -(1 * slideSize) + "px";
                index = 0;
            }
            allowShift = true;
        };

        // Transition events
        items.addEventListener("transitionend", checkIndex);

        const shiftSlide = (dir) => {
            items.classList.add("shifting");

            if (allowShift) {
                posInitial = items.offsetLeft;

                if (dir === 1) {
                    items.style.left = posInitial - slideSize + "px";
                    index++;
                } else if (dir === -1) {
                    items.style.left = posInitial + slideSize + "px";
                    index--;
                }
            }
            allowShift = false;
        };
    };

    return (
        <div
            id="slider"
            className="slider"
            style={{ "margin-left": "5px", "margin-right": "5px" }}
        >
            <div className="wrapper">
                <button id="prev" className="carousel-prev"></button>
                <div id="slides" className="slides">
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                </div>
                <button id="next" className="carousel-next"></button>
            </div>
        </div>
    );
};

export default Carousel;
