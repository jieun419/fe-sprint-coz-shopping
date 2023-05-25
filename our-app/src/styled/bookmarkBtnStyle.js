import styled from "styled-components"

export const BookmarkBtnComponent = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  >.AiFillStar {
    /* color: ${(props) => (props.color ? props.color : null)}; */
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
    color: ${(props) => (props.isBookMark ? "#FFD361" : "#dfdfdf")};
  }
      
`