import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    return (
        <>
            <div className="item item1">
                <div className="inner_item">
                    <Link to={`/goods/${product.id}`}>
                        <img
                            src={product.img}
                            width={product.img_width}
                            height={product.img_height}
                            alt="main2_pic"
                        />
                    </Link>
                </div>
                <div className="item_description">
                    <span className="name">{product.name}</span>
                    <span className="price">
                        {product.dc && <span className="dc">{product.dc}</span>}
                        {product.price}
                    </span>
                    <span className="cost">{product.cost}</span>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
