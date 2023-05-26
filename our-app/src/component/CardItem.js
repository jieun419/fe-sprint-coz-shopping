import { useState } from "react"
import Modal from "./Modal";
import BookMarkBtn from "./BookmarkBtn"
import { numComma } from "../common/utils";
import { Section, BookMarkContain, TextBox } from "../styled/cardItemStyle";


function CardItem({ handleBookmarkToggle, isBookMark, productItem }) {
  const [isModal, setIsModal] = useState(false)

  const showModal = () => {
    setIsModal(!isModal)
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
