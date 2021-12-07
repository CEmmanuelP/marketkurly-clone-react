import { useEffect } from "react";

const Carousel = () => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(1);
  });
  // Next/prev controls
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("carousel");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  };

  return (
    <div
      className="carousel-container"
      style={{ "margin-left": "5px", "margin-right": "5px" }}
    >
      <button className="carousel-prev" onClick={() => plusSlides(-1)}></button>
      <div className="carousel slide1">
        <img
          src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1637311387.jpg"
          width="100%"
          height="320"
          alt="banner"
        />
      </div>
      <div className="carousel slide2">
        <img
          src="https://img-cf.kurly.com/banner/main/pc/img/2abed505-2b13-4d4d-878d-98ab6b8bee7a"
          width="100%"
          height="320"
          alt="banner"
        />
      </div>
      <div className="carousel slide3">
        <img
          src="https://img-cf.kurly.com/banner/main/pc/img/01bb8bfc-e6b1-4a96-9d67-5afa1df161da"
          width="100%"
          height="320"
          alt="banner"
        />
      </div>
      <div className="carousel slide4">
        <img
          src="https://img-cf.kurly.com/banner/main/pc/img/8aea0f43-a2c9-465f-bf74-db2936017e24"
          width="100%"
          height="320"
          alt="banner"
        />
      </div>
      <button className="carousel-next" onClick={() => plusSlides(1)}></button>
    </div>
  );
};

export default Carousel;
