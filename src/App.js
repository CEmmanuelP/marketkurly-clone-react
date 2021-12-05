import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Login from "./Login";
import Main from "./Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="detail" element={<Detail />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
