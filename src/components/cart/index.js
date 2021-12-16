import { useSelector } from "react-redux";

const Cart = () => {
  const { id, name } = useSelector((state) => state.shoppingBasketReducer);

  return (
    <>
      <div>
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </>
  );
};

export default Cart;
