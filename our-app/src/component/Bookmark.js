import { AiFillStar } from "react-icons/ai";
import styled from "styled-components"
import { useEffect, useState } from "react"

const BookmarkBtn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  /* color: #dfdfdf; FFD361 */
  color: ${(props) => (props.color ? props.color : null)};
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));
`


function BookMark() {
  const [isBookMark, setIsBookMark] = useState(false)
  
  const getBookMark = () => {
    return setIsBookMark(!isBookMark)
  }

  return (
    <BookmarkBtn onClick={getBookMark}>
      {isBookMark
        ? <AiFillStar color="#FFD361"/>
        : <AiFillStar color="#dfdfdf"/>
      }
    </BookmarkBtn>
  );
}

export default BookMark;
