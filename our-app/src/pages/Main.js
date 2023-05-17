import styled from "styled-components"
import { useState } from "react"
import CardItem from "../component/CardItem"
import { Article } from "../styled/mainStyle"


function Main({ MainCont, productItem }) {

  const [isBookMark, setIsBookMark] = useState(false)
  const [dataState, setDataState] = useState([])
  const BOOKMARK = "BOOKMARK"

  const storedData = JSON.parse(localStorage.getItem(BOOKMARK));

  const handleBookmarkToggle = (item) => {
    if (dataState.includes(item) || storedData.includes(item)) {
      const filterData = dataState.filter(el => el.id !== item.id)
      setDataState(filterData)
      localStorage.setItem(BOOKMARK, JSON.stringify(filterData))
    } else {
      setDataState([...dataState, item])
      localStorage.setItem(BOOKMARK, JSON.stringify([...dataState, item]))
    }
    console.log(isBookMark)
  }
  return (
    <MainCont>

      <h2>상품 리스트</h2>
      <Article>
        {productItem.map((el) => {
          return (
            <CardItem
              key={el.id}
              productItem={el}
              handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
              isBookMark={isBookMark}
              dataState={dataState}
            />
          );
        })}

      </Article>
      <h2>북마크 리스트</h2>
      <Article>

        {storedData && storedData.map((el) => {
          return (
            <CardItem
              key={el.id}
              productItem={el}
              handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
              isBookMark={!isBookMark}
              dataState={dataState}
            />
          );
        })}

      </Article>

    </MainCont>

  );
}

export default Main;
