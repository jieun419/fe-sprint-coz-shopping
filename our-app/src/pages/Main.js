import { useState } from "react"
import CardItem from "../component/CardItem"
import { Article } from "../styled/mainStyle"

function Main({ Container, productItem }) {

  const [isBookMark, setIsBookMark] = useState(false)
  const [dataState, setDataState] = useState([])
  const BOOKMARK = "BOOKMARK"

  const storedData = JSON.parse(localStorage.getItem(BOOKMARK));

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

  return (
    <Container>
      <h2>상품 리스트</h2>
      <Article>
        {productItem.slice(0,4).map((el) => {
          return (
            <CardItem
              key={el.id}
              productItem={el}
              handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
              isBookMark={storedData.some(item => item.id === el.id)}
              dataState={dataState}
            />
          );
        })}

      </Article>
      <h2>북마크 리스트</h2>
      <Article>
        
        {storedData && storedData.slice(0,4).map((el) => {
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

    </Container>

  );
}

export default Main;
