function App() {
  let [goods, setGoods] = useState([
    {goodsName:'Bag', price: 100},
    {goodsName:'Clock', price: 200},
    {goodsName:'Tshirt', price: 300}
  ])
  let [mybag, setBybag] = useState([])

  let [total, setTotal] = useState(0)


  useLayoutEffect(() => {
    
  },[mybag, total])

  return (
    <div>

      {goods.map((item) => {
        return(
          <div key={item.goodsName}>
            <p>{item.goodsName}</p>
            <p>{item.price}</p>
            <button onClick={() =>{ 
             let obj = goods.find((itemFind) => item.goodsName === itemFind.goodsName)
             obj = {...obj, count:1 , totalPrice: obj.price}
              console.log(obj)
              let newarr = [...mybag,obj]
              setBybag(newarr)
              newarr.forEach((item) => {
                setTotal(total + item.totalPrice)
             })
             console.log(total)
              }}>BUY</button>
          </div>
        )
      })}
      <div>
        <p>MY BAG</p>
        {mybag.map((item) => {
        return(
          <div key={item.goodsName}>
            <p>{item.goodsName}</p>
            <p>{item.price}</p>
            <button onClick={() => {
              item.count = item.count + 1
              item.totalPrice = item.count * item.price
              console.log(item)
              mybag.forEach((item) => {
                 setTotal(total + item.totalPrice)
              })
              }}>PLUS</button>
            <button>Delete</button>
          </div>
        )
      })}
      </div>
      <p>{total}</p>
    </div>
  );
}

export default App;
