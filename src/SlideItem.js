const SlideItem = ({ url }) => {
    return (
        <div
            className="slide"
            style={{
                outline: "none",
                width: "100%",
                height: "320px",
                backgroundImage: `url(${url})`,
            }}
        ></div>
    );
};

export default SlideItem;
