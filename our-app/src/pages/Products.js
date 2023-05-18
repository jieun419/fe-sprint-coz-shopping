import { Article } from "../styled/mainStyle"
import { useState, useEffect } from "react"

import TabList from "../component/TabList"
import styled from 'styled-components';
import CardItem from "../component/CardItem"

const TabListCont = styled.section`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`

function Products({ tabContArr, Container, productItem, handleBookmarkToggle, dataState, storedData }) {
  const [isTapmenu, setIsTapmenu] = useState(0)
  const [isFilterType, setIsFilterItem] = useState('')
  const [filterItem, setFilterItem] = useState(productItem)

  const handleFilter = (idx, type) => {
    setIsTapmenu(idx);
    setIsFilterItem(type);
  };

  useEffect(() => {
    if (filterItem.length === 0) {
      setFilterItem(productItem)
    }
    let filteredItem = productItem.filter((el) => tabContArr[isTapmenu].type === el.type);
    setFilterItem([...filteredItem]);
  }, [isTapmenu]);

  return (
    <Container>
      <TabListCont>
        {tabContArr.map((el, idx) => (
          <TabList key={idx} id={idx} type={el.type} tabContArr={el} isTapmenu={isTapmenu} handleFilter={handleFilter} />
        ))}
      </TabListCont>

      <Article>
        {
          isTapmenu !== 0
            ? filterItem.map((el) => (
              <CardItem
                key={el.id}
                productItem={el}
                handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
                isBookMark={storedData.some(item => item.id === el.id)}
                dataState={dataState}
              />
            ))
            : productItem.map((el) => {
              return (
                <CardItem
                  key={el.id}
                  productItem={el}
                  handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
                  isBookMark={storedData.some(item => item.id === el.id)}
                  dataState={dataState}
                />
              );
            })
        }
      </Article>
    </Container>
  )
}

export default Products