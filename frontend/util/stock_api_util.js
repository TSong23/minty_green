// const iexApiKey = ENV["API_KEY"];

export const fetchStockPastData = (ticker, time) => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${time}?token=${iexApiKey}`
    //include API token.
    //store the API code within environment var

    //returns data according to ticker and time passed in
  })
)

export const fetchCompanyInfo = (ticker) => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${iexApiKey}`
  })
)


export const fetchStockIntraday = (ticker) => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${iexApiKey}`
    //include API token.
    //store the API code within environment var

    //returns data according to ticker and time passed in
  })
)

export const fetchStockAllListing = () => (
  $.ajax({
    method: "GET",
    url: 'api/stocks'
  })
)

export const fetchStockName = (ticker) => (
  $.ajax({
    method: "GET",
    url: `api/stocks/${ticker}`
  })
)