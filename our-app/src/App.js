import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import { Container } from "./styled/commonStyle"
import { tabContArr } from "./data/filterData"

import Header from './component/Header';
import Footer from './component/Footer';
import Products from "./pages/Products";
import Bookmark from "./pages/Bookmark";
import Main from "./pages/Main";
import pruductData from "./api/pruductData"


function App() {
  const [productItem, setProductItem] = useState([])
  const [isBookMark, setIsBookMark] = useState(false)
  const [dataState, setDataState] = useState([])
  const [isTapmenu, setIsTapmenu] = useState(0)
  const [isFilterType, setIsFilterItem] = useState('')
  const [filterItem, setFilterItem] = useState(productItem)
  const [filterStoredItem, setFilterStoredItem] = useState()

  const BOOKMARK = "BOOKMARK"
  const storedData = JSON.parse(localStorage.getItem(BOOKMARK));

  const handleFilter = (idx, type) => {
    setIsTapmenu(idx);
    setIsFilterItem(type);
  };


  const handleBookmarkToggle = (item) => {
    if (dataState.includes(item) || storedData.includes(item)) {
      const filterData = dataState.filter(el => el.id !== item.id)
      setDataState([...filterData])
      localStorage.setItem(BOOKMARK, JSON.stringify([...filterData]))
    } else {
      setDataState([item, ...storedData])
      localStorage.setItem(BOOKMARK, JSON.stringify([item, ...storedData]))
    }
  }


  useEffect(() => {
    if (filterItem.length === 0) {
      setFilterItem(productItem)
    } else if (storedData.length === 0) {
      setFilterStoredItem(storedData)
    }
    let filteredItem = productItem.filter((el) => tabContArr[isTapmenu].type === el.type);
    let filterStoredItem = storedData.filter((el) => tabContArr[isTapmenu].type === el.type);
    setFilterItem([...filteredItem]);
    setFilterStoredItem([...filterStoredItem]);
  }, [isTapmenu]);

  useEffect(() => {
    pruductData()
      .then((data) => {
        setProductItem(data)
      })
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              Container={Container}
              productItem={productItem}
              handleBookmarkToggle={handleBookmarkToggle}
              isBookMark={isBookMark}
              dataState={dataState}
              storedData={storedData}
            />}
        />
        <Route
          path="/Products/list"
          element={
            <Products
              Container={Container}
              productItem={productItem}
              handleBookmarkToggle={handleBookmarkToggle}
              isBookMark={isBookMark}
              dataState={dataState}
              storedData={storedData}
              tabContArr={tabContArr}
              handleFilter={handleFilter}
              filterItem={filterItem}
              isTapmenu={isTapmenu}
            />} />
        <Route
          path="/Bookmark"
          element={
            <Bookmark
              Container={Container}
              productItem={productItem}
              handleBookmarkToggle={handleBookmarkToggle}
              isBookMark={isBookMark}
              dataState={dataState}
              storedData={storedData}
              tabContArr={tabContArr}
              handleFilter={handleFilter}
              filterItem={filterItem}
              isTapmenu={isTapmenu}
              filterStoredItem={filterStoredItem}
            />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
