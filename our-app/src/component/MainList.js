import styled from "styled-components"
import CardItem from "../component/CardItem"
import { dummyData } from "../api/dummyData"

const Article = styled.article`
  display: flex;
  gap: 24px;
`

function MainList() {
  return (
    <Article>
      {
        dummyData.map((el, idx) => {
          return <CardItem key={idx} dummyData={el}/>
        })
      }
    </Article>
  );
}

export default MainList;
