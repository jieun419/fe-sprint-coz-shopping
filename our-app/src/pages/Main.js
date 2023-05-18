import CardItem from "../component/CardItem"
import { Article } from "../styled/mainStyle"

function Main({ Container, productItem, handleBookmarkToggle, isBookMark, dataState, storedData }) {

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
