import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";
import Main from "./pages/Main";
import styled from "styled-components"

const MainCont = styled.main`
  padding: 0 75px;
`

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main MainCont={MainCont} />} />
        <Route path="/pages/Products" element={<Products MainCont={MainCont} />} />
        <Route path="/pages/Bookmark" element={<Bookmark MainCont={MainCont} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
