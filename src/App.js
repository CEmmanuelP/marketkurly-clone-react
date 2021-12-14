import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Layout from "./components/Layout";
import Login from "./components/login/Login";
import Main from "./Main";
import Best from "./components/Best";

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
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
