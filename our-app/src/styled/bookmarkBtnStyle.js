import styled from "styled-components"

export const BookmarkBtn = styled.button`
  color: ${(props) => (props.color ? props.color : null)};
  font-size: 2rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
`