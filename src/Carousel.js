import { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import SlideItem from "./SlideItem";
import Slider from "react-slick";

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
        cloneSlide();
    }, []);

    const cloneSlide = () => {
        // const slides = sliderItems.current.getElementsByClassName("slide");
        const children = sliderItems.current.childNodes;
        const children_cpy = [...children];
        console.log(children_cpy);

        console.log(sliderItems.current);
        console.log(sliderItems.current.childNodes);
        console.log(children);

        if (sliderItems.current.hasChildNodes()) {
            console.log("hasChildNode");
            const children = sliderItems.current.childNodes;
            for (let i = 0; i < children.length; i++) {
                console.log(children[i]);
            }
        }

        // const cloneFirst = slides[0].cloneNode(true);
        // const cloneLast = slides[slides.length - 1].cloneNode(true);

        // sliderItems.current.appendChild(cloneFirst);
        // sliderItems.current.insertBefore(cloneLast, slides[0]);
    };

    return (
        <div id="slider" className="slider" ref={slider}>
            <div className="wrapper">
                <button id="prev" className="carousel-prev"></button>
                <div
                    id="slides"
                    className="slides"
                    ref={sliderItems}
                    style={{
                        width: slider.current
                            ? slider.current.offsetWidth *
                              (slide_url.length + 4)
                            : "1000%",
                    }}
                >
                    {bnrUrls &&
                        bnrUrls.map((url) => {
                            return <SlideItem key={url.id} url={url.url} />;
                        })}
                </div>
                <button id="next" className="carousel-next"></button>
            </div>
        </div>
    );
};

export default Carousel;
