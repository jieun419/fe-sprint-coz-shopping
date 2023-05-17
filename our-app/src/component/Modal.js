import { AiOutlineClose } from "react-icons/ai";
import BookMark from "./BookmarkBtn"
import { ModalCont, ModalBg, ModalBox, CloseBtn, TextBox } from "../styled/modalStyle"

function Modal({ productItem, showModal }) {
  return (
    <ModalCont>
      <ModalBg onClick={showModal}/>
      <ModalBox>
        <img
          src={productItem.type === "Brand" ? productItem.brand_image_url : productItem.image_url}
          alt={productItem.type === "Brand" ? productItem.brand_name : productItem.title}
        />
        
        <CloseBtn onClick={showModal}><AiOutlineClose /></CloseBtn>
        <TextBox>
          <BookMark />
          <strong>{productItem.type === "Brand" ? productItem.brand_name : productItem.title}</strong>
        </TextBox>
      </ModalBox>
    </ModalCont>
  )
}

export default Modal