import { Article } from "../styled/mainStyle"
import CardItem from "../component/CardItem"

function ProductsList({ productItem, handleBookmarkToggle, isBookMark, dataState, storedData }) {
  return (
    <Article>
      {productItem.map((el) => {
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
  )
}

export default ProductsList