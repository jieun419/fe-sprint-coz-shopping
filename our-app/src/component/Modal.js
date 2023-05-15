import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components"
import BookMark from "./Bookmark"

const ModalCont = styled.article`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0; right: 0; top: 0; bottom: 0;
`

const ModalBg = styled.div`
  position: fixed;
  z-index: -1;
  background: rgba(255, 255, 255, 0.4);
  left: 0; right: 0; top: 0; bottom: 0;
`
const ModalBox = styled.section`
  position: relative;
  width: 744px;
  height: 480px;
  border-radius: 12px;
  overflow: hidden;
  color: #fff;
  filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5));

  >img{
     position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 0;
      padding-bottom: 40%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.5) 100%);
      left: 0;
      bottom: 0;
    }
`

const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  font-size: 2rem;
`

const TextBox = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
`


function Modal({ dummyData, showModal }) {

  return (
    <ModalCont>
      <ModalBg onClick={showModal}/>
      <ModalBox>
        <img
          src={dummyData.type === "Brand" ? dummyData.brand_image_url : dummyData.image_url}
          alt={dummyData.type === "Brand" ? dummyData.brand_name : dummyData.title}
        />
        
        <CloseBtn onClick={showModal}><AiOutlineClose /></CloseBtn>
        <TextBox>
          <BookMark />
          <strong>{dummyData.type === "Brand" ? dummyData.brand_name : dummyData.title}</strong>
        </TextBox>
      </ModalBox>
    </ModalCont>
  )
}


export default Modal