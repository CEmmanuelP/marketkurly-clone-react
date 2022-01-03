import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import SlideItem from "./SlideItem";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                top: "45%",
                left: "50%",
                zIndex: "100",
                width: "52px",
                height: "52px",
                border: "0px",
                marginLeft: "570px",
                background:
                    "url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_right_52_52.svg) 50% 50% no-repeat",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                position: "absolute",
                top: "45%",
                left: "50%",
                zIndex: "100",
                width: "52px",
                height: "52px",
                border: "0px",
                marginLeft: "-590px",
                background:
                    "url(https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_left_52_52.svg) 50% 50% no-repeat",
            }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    render() {
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

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div>
                <Slider {...settings}>
                    {slide_url.map((url) => {
                        return <SlideItem key={url.id} url={url.url} />;
                    })}
                </Slider>
            </div>
        );
    }
}
