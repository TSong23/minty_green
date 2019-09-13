const iexApiKey = 'sk_a17455c2f5a146f0b9e4bcde9930fd1e';

export const fetchStock = ticker => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1m/?token=${iexApiKey}`
    //include API token.
    //store the API code within environment var

  })
)