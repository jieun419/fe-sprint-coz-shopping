import Modal from "./Modal";
import BookMarkBtn from "./BookmarkBtn"
import { useState } from "react"
import { Section, BookMarkContain, TextBox } from "../styled/cardItemStyle";

function CardItem({ handleBookmarkToggle, isBookMark, productItem }) {
  const [isModal, setIsModal] = useState(false)

  const showModal = () => {
    setIsModal(!isModal)
  }

  const numComma = (num) => {
    const str = String(num);
    let result = '';

    if (str === 'null') return null;

    for (let i = 0; i < str.length; i++) {
      if (i !== 0 && i % 3 === 0) result = `,${result}`;
      result = str[str.length - i - 1] + result;
    }
    return result;
  }


  return (
    <Section key={productItem.id} id={productItem.id}>
      {isModal
        ? <Modal
          productItem={productItem}
          showModal={showModal}
          handleBookmarkToggle={handleBookmarkToggle}
          isBookMark={isBookMark} />
        : null
      }

      <div className="img-box">
        <img onClick={showModal}
          src={productItem.type === "Brand" ? productItem.brand_image_url : productItem.image_url}
          alt={productItem.type === "Brand" ? productItem.brand_name : productItem.title}
        />
        <BookMarkContain>
          <BookMarkBtn
            productItem={productItem}
            handleBookmarkToggle={handleBookmarkToggle}
            isBookMark={isBookMark} />
        </BookMarkContain>
      </div>

      <TextBox>
        <div className="left-area">
          <strong>
            {productItem.type !== "Brand" || productItem.brand_name}
            {(productItem.type === "Product") || (productItem.type === "Exhibition") ? productItem.title : null}
            {productItem.type !== "Category" || `#${productItem.title}`}
          </strong>
          {productItem.sub_title}
        </div>

        <div className="right-area">
          {/* Category, Exhibition */}
          {!productItem.discountPercentage && null}
          {/* Brand */}
          {productItem.type !== "Brand" || <strong>관심고객수</strong>}
          {/* Product*/}
          {productItem.type !== "Product" || <strong className="product">{`${productItem.discountPercentage}%`}</strong>}
          <span>{!productItem.price ? numComma(productItem.follower) : `${numComma(productItem.price)}원`}</span>
        </div>
      </TextBox>
    </Section>
  );
}



export default CardItem;
