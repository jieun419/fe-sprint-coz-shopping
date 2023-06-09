import { Article } from "../styled/mainStyle"
import TabList from "../component/TabList"
import CardItem from "../component/CardItem"
import { TabListCont } from "../styled/filterTablistStyle"
import Notfound from "../component/NotBookmark"
import { useEffect, useState } from "react"


function Bookmark({ filterStoredItem, handleFilter, filterItem, isTapmenu, tabContArr, Container, productItem, handleBookmarkToggle, dataState, storedData }) {

  return (
    <Container>
      <TabListCont>
        {tabContArr.map((el, idx) => (
          <TabList key={idx} id={idx} type={el.type} tabContArr={el} isTapmenu={isTapmenu} handleFilter={handleFilter} />
        ))}
      </TabListCont>

      <Article>
        {storedData.length === 0
          ? (
            <Notfound />
            )
          : (
            isTapmenu !== 0 ? (
              filterStoredItem.map((el) => (
                <CardItem
                  key={el.id}
                  productItem={el}
                  handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
                  isBookMark={storedData.some(item => item.id === el.id)}
                  dataState={dataState}
                />
              ))
            ) : (
              storedData.map((el) => (
                <CardItem
                  key={el.id}
                  productItem={el}
                  handleBookmarkToggle={() => { handleBookmarkToggle(el) }}
                  isBookMark={storedData.some(item => item.id === el.id)}
                  dataState={dataState}
                />
              ))
            )
          )}

      </Article>
    </Container>
  )
}

export default Bookmark