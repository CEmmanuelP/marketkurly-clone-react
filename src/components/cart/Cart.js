import { useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "./CartItem";

const Cart = () => {
    const cart = useSelector((state) => state.cartReducer);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <div
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid green",
                    margin: "0 auto",
                }}
            >
                {/* <p>{cart}</p>
                <p>{cart.name}</p> */}
                {cart.map((cartItem) => {
                    return (
                        <CartItem
                            key={cartItem.id}
                            id={cartItem.id}
                            name={cartItem.name}
                            img={cartItem.img}
                            price={cartItem.price}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Cart;
