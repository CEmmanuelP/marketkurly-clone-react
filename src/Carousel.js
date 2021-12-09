import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import SlideItem from "./SlideItem";

const Carousel = () => {
  const slide_url = [
    {
      id: 1,
      url: "https://img-cf.kurly.com/shop/data/main/1/pc_img_1637311387.jpg",
    },
    {
      id: 2,
      url: "https://img-cf.kurly.com/banner/main/pc/img/2abed505-2b13-4d4d-878d-98ab6b8bee7a",
    },
    {
      id: 3,
      url: "https://img-cf.kurly.com/banner/main/pc/img/01bb8bfc-e6b1-4a96-9d67-5afa1df161da",
    },
    {
      id: 4,
      url: "https://img-cf.kurly.com/banner/main/pc/img/8aea0f43-a2c9-465f-bf74-db2936017e24",
    },
  ];

  const [bnrUrls, setBnrUrls] = useState([]);
  const slider = useRef();
  const sliderItems = useRef();

  useEffect(() => {
    setTimeout(() => {
      setBnrUrls(slide_url);
    }, 2000);
  });

  useEffect(() => {
    const slider = document.getElementById("slider");
    const sliderItems = document.getElementById("slides");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    // slide(slider, sliderItems, prev, next);
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

    console.log("Carousel slide function");

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add("loaded");

    // Click events
    prev.addEventListener("click", () => {
      console.log("prev click!");
      shiftSlide(-1);
    });
    next.addEventListener("click", () => {
      console.log("next click!");
      shiftSlide(1);
    });

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
  };

  return (
    <div
      id="slider"
      className="slider"
      style={{ "margin-left": "5px", "margin-right": "5px" }}
      ref={slider}
    >
      <div className="wrapper">
        <button id="prev" className="carousel-prev"></button>
        <div id="slides" className="slides" ref={sliderItems}>
          {bnrUrls &&
            bnrUrls.map((url) => {
              return <SlideItem key={url.id} url={url.url} />;
            })}
          <div className="slide">2</div>
          <div className="slide">3</div>
          <div className="slide">4</div>
        </div>
        <button id="next" className="carousel-next"></button>
      </div>
    </div>
  );
};

export default Carousel;
