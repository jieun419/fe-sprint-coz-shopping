
const pruductData = async () => {
  const url = `http://cozshopping.codestates-seb.link/api/v1/products?count`
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log('Error fetching data:', error);
    return []; 
  }
}

export default pruductData