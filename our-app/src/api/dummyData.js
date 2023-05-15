export const dummyData = [

  {
    brand_image_url: null,
    brand_name: null,
    discountPercentage: 20,
    follower: null,
    id: 89,
    image_url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80",
    price: "3290000",
    sub_title: null,
    title: "맥북 프로 16인치 M1",
    type: "Product"
  },

  {
    brand_image_url: null,
    brand_name: null,
    discountPercentage: null,
    follower: null,
    id: 30,
    image_url: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: null,
    sub_title: null,
    title: "장난감",
    type: "Category"
  },

  {
    brand_image_url: null,
    brand_name: null,
    discountPercentage: null,
    follower: null,
    id: 41,
    image_url: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: null,
    sub_title: "차량 용품 전문관",
    title: "소중한 내 차를 위해",
    type: "Exhibition"
  },
  {
    brand_image_url:  "https://images.unsplash.com/photo-1514866208388-0a68921c26bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    brand_name: "뉴에라",
    discountPercentage: null,
    follower: 2306,
    id: 64,
    image_url: null,
    price: null,
    sub_title: null,
    title: null,
    type: "Brand"
  }
]



// const [data, setData] = useState([])

// const getData = () => {
//   const url = 'http://cozshopping.codestates-seb.link/api/v1/products?count='
//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       const initData = data.map((el) => {
//         return {
//           id: el.id,
//           type: el.type,
//           title: el.title,
//           sub_title: el.sub_title,
//           brand_name: el.brand_name,
//           price: el.price,
//           discountPercentage: el.discountPercentage,
//           image_url: el.image_url,
//           brand_image_url: el.brand_image_url,
//           follower: el.follower
//         }
//       })
//       setData(...data, initData)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// useEffect(() => {
//   getData()
// }, [])
