import { TabBtn, Imgbox } from "../styled/tabMenuStyle"

function TabList({ tabContArr, handleFilter, id, isTapmenu }) {
  return (
    <TabBtn className={tabContArr.id === isTapmenu ? "active" : null} tabtype={tabContArr.type} onClick={() => handleFilter(id, tabContArr.type)}>
      <Imgbox src={tabContArr.src} />
      <span>{tabContArr.name}</span>
    </TabBtn>
  )
}




export default TabList