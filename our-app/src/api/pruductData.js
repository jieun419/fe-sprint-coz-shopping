
const pruductData = async (count) => {
  const url = `http://cozshopping.codestates-seb.link/api/v1/products?count=${count}`
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('Error fetching data:', error);
    return []; // 또는 에러 처리에 따라 적절한 기본값을 반환합니다.
  }
}

export default pruductData