import { useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";

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
                <p>{cart}</p>
                <p>{cart.name}</p>
            </div>
        </>
    );
};

export default Cart;
