const ProductItem = ({ product }) => {
  return (
    <>
      <div className="item item1">
        <div>
          <img
            src={product.img}
            width={product.img_width}
            height={product.img_height}
            alt="main2_pic"
          />
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
