import styled from "styled-components"
import Modal from "./Modal";
import BookMark from "./Bookmark"
import { useEffect, useState } from "react"


const Section = styled.section`
 flex: 1;
  >.img-box {
    position: relative;
    height: 0;
    padding-bottom: 90%;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
  }
  >.img-box img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5px;

  >.left-area, .right-area{
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }
  >.right-area{
    align-items: flex-end;

    >strong.product{
    color: #452CDD
    }
  }
`

function CardItem({ dummyData }) {
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
    <Section>
      {/* <Modal dummyData={dummyData} /> */}
      {isModal ? <Modal dummyData={dummyData} showModal={showModal}/> : null}

      <div className="img-box">
        <img onClick={showModal}
          src={dummyData.type === "Brand" ? dummyData.brand_image_url : dummyData.image_url}
          alt={dummyData.type === "Brand" ? dummyData.brand_name : dummyData.title}
        />
        <BookMark />
      </div>

      <TextBox>
        <div className="left-area">
          <strong>{dummyData.type === "Brand" ? dummyData.brand_name : dummyData.title}</strong>
          <span>{dummyData.sub_title}</span>
        </div>

        <div className="right-area">
          {/* Category, Exhibition */}
          {!dummyData.discountPercentage && null}
          {/* Brand */}
          {dummyData.type !== "Brand" || <strong>관심고객수</strong>}
          {/* Product*/}
          {dummyData.type !== "Product" || <strong className="product">{`${dummyData.discountPercentage}%`}</strong>}
          <span>{!dummyData.price ? numComma(dummyData.follower) : `${numComma(dummyData.price)}원`}</span>
        </div>
      </TextBox>
    </Section>
  );
}

export default CardItem;
