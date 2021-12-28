const SlideItem = ({ url }) => {
    return (
        <div
            className="slide"
            style={{
                outline: "none",
                width: "100%",
                backgroundImage: `url(${url})`,
            }}
        ></div>
    );
};

export default SlideItem;
