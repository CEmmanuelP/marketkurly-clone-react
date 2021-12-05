import ProductItem from "./ProductItem";

const ProductContainer = ({ data }) => {
  return (
    <>
      <h3 className="main2_title tit_good">
        {data.title_class ? (
          <span className="ico">{data.title}</span>
        ) : (
          data.title
        )}
      </h3>
      <div className="products">
        {data.products.map((product, i) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductContainer;
