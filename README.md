# MintGreen

[https://mintgreen.herokuapp.com]

MintGreen is a clone of Robinhood web app. It allows users to view intraday and historical stock prices of the S&P500 companies and create multiple watchlists consisting of those companies.

## Technology

* MintGreen uses Ruby on Rails backend and React/Redux frontend. PostgreSQL is used as the database. 
It utilizes AJAX calls https://cloud.iexapis.com/ to asynchronously fetch the real time and historical stock data. 
* User interaction on the frontend allows ticker and time to be dynamically selected and passed down to the AJAX call
```javascript
export const fetchStockPastData = (ticker, time) => (
  $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${time}?token=${iexApiKey}`
  })
)
```

* Users can view stock data by navigating to a company page via MintGreen will parse the data and render the interactive stock chart. The chart has UI elements that allows the time range for the stock data to be changed



* MintGreen keeps track of users and their watchlists. By searching a company's symbol in the search bar, the user can navigate to the show page for that company and add or remove that company from their watchlist

* MintGreen allows users to make purchases of stocks and track their portfolio's value over time (under development)


##Usage
Users can utilize this application to simulate experience of stock investing



