import { useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "./CartItem";
import { Content, Main, PageArticle } from "../../common/styled";

const Cart = () => {
    const cart = useSelector((state) => state.cartReducer);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <Main>
                <Content>
                    <PageArticle>
                        <div
                            style={{
                                paddingTop: "26px",
                                paddingBottom: "10px",
                            }}
                        >
                            <div style={{ position: "relative" }}>
                                <h3 className="best_title">장바구니</h3>
                            </div>
                        </div>
                        <div
                            style={{
                                border: "1px solid #eee",
                                width: "500px",
                                height: "500px",
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
                    </PageArticle>
                </Content>
            </Main>
        </>
    );
};

export default Cart;
