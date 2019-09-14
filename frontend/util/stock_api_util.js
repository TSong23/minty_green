const iexApiKey = 'sk_a17455c2f5a146f0b9e4bcde9930fd1e';

export const fetchStockPastData = (ticker, time) => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${time}/?token=${iexApiKey}`
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


