import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { Container } from "./styled/commonStyle"

import Header from './component/Header';
import Footer from './component/Footer';
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";
import Main from "./pages/Main";
import pruductData from "./api/pruductData"

function App() {
  const [productItem, setProductItem] = useState([])
  const [dataCount, setDataCount] = useState(4)
  // const [bookmarked, setBookmarked] = useState([])

  useEffect(() => {
    pruductData(dataCount)
      .then((data) => {
        setProductItem(data)
      })
  }, [dataCount])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main Container={Container} productItem={productItem} dataCount={4} />}
        />
        <Route
          path="/pages/Products"
          element={<Products Container={Container} productItem={productItem} dataCount={20} />} />
        <Route
          path="/pages/Bookmark"
          element={<Bookmark Container={Container} productItem={productItem} dataCount={20} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
