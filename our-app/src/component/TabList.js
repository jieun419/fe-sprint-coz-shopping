import styled from 'styled-components';

function TabList({ tabContArr, handleFilter, id }) {
  return (
      <TabBtn onClick={() => handleFilter(id)}>
        <Imgbox src={tabContArr.src} />
        {tabContArr.name}
      </TabBtn>
  )
}

const TabBtn = styled.button`
  position: relative;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Imgbox = styled.img`
  margin-bottom: 5px;
`


export default TabList