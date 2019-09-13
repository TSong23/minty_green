
const stock = (stock_data) => {
  //lets extract the data i want from 
  let daily_close_price = stock_data.map(obj => {
    return(obj.close)
  })

  return(
    <div>
      {daily_close_price}
    </div>
  )
}

export default stock;