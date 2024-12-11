# Fetch and Display Data (50 points)
We are building a tiny app to display the current price of 1 Bitcoin (BTC).

1. Create a React app (e.g. using Vite)
2. On the first page, create a new component to show the Bitcoin price in USD.
3. Use mock data to show the BTC price:
   - create a variable that holds the BTC price and set it to `100000`.
   - Use this variable in your JSX to show the Bitcoin price.
   - Make sure the price is labeled so the user knows what is displayed
   - Make sure the currency is indicated somehow
4. Get real data
   - Use `fetch` to get the real BTC price from `https://api.coindesk.com/v1/bpi/currentprice.json`
   - Don't forget to convert your response from JSON: `const data = await response.json()` 
   - You can find the bitcoin price at `data.bpi.USD.rate` - use it in your component to
     show the real price instead of a mock price.

# Knowledge Check (40 points)
1. In your own words: what is an API and why would it be used in React applications?
2. When fetching data from an API, you receive a status code of 404. What does that mean?
3. Break down the following URLs into their components: Protocol, Host, Port, Path, Query

  - https://api.shopify.com/products?userId=5&page=2
  - https://api.github.com:443/
  - http://127.0.0.1/react

4. What is the purpose of including headers in an API request? Provide an example of a commonly used header.
