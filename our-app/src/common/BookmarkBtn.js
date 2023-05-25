import { AiFillStar } from "react-icons/ai";
import styled from "styled-components"

export const BookmarkBtnComponent = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active .AiFillStar, &:focus .AiFillStar {
    color: #FFD361;
  }

  >.AiFillStar {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    color: ${(props) => (props.primary ? "#FFD361" : "#dfdfdf")};
  }
      
`
function BookMarkBtn({ primary, handleBookmarkToggle, isBookMark }) {
  return (
    <BookmarkBtnComponent primary={primary} onClick={handleBookmarkToggle}>
      <AiFillStar className="AiFillStar" />
    </BookmarkBtnComponent>
  );
}

export default BookMarkBtn;
