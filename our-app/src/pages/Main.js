import MainList from "../component/MainList"

function Main({MainCont}) {
  return (
    <MainCont>
      <h2>상품 리스트</h2>
      <MainList />
      <h2>북마크 리스트</h2>
    </MainCont>
  );
}

export default Main;
