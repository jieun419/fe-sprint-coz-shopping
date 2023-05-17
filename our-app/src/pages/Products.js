import { Article } from "../styled/mainStyle"
import { useState } from "react"

import TabList from "../component/TabList"

import imgAll from "../img/filter-all.svg"
import imgBrand from "../img/filter-brand.svg"
import imgCategory from "../img/filter-category.svg"
import imgExhibition from "../img/filter-exhibition.svg"
import imgProduct from "../img/filter-product.svg"
import styled from 'styled-components';

const TabListCont = styled.section`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`

function Products({ Container }) {
  const [isTapmenu, setIsTapmenu] = useState(0)
  const tabContArr = [
    { name: "전체", type: "all", src: imgAll, content: "1" },
    { name: "상품", type: "brand", src: imgBrand, content: "2" },
    { name: "카테고리", type: "category", src: imgCategory, content: "3" },
    { name: "기획전", type: "exhibition", src: imgExhibition, content: "4" },
    { name: "브랜드", type: "product", src: imgProduct, content: "5" },
  ];

  const handleFilter = (idx) => {
    setIsTapmenu(idx)
    console.log(idx)
  }

  return (
    <Container>
      <TabListCont>
        {tabContArr.map((el, idx) => (
          <TabList key={idx} id={idx} tabContArr={el} isTapmenu={isTapmenu} handleFilter={handleFilter} />
        ))}
      </TabListCont>

      <div>
        {tabContArr[isTapmenu].content}
      </div>

    </Container>
  )
}

export default Products