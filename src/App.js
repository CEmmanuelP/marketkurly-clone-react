import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Layout from "./components/Layout";
import Login from "./components/login/Login";
import Main from "./Main";
import Best from "./components/Best";
import Join from "./components/login/Join";
import Cart from "./components/cart/Cart";

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="goods/:id" element={<Detail />} />
                        <Route path="login" element={<Login />} />
                        <Route path="best" element={<Best />} />
                        <Route path="join" element={<Join />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
