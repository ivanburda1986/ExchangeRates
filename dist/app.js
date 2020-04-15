const exchangeRatesRequest = new ExchangeRates;

//Get exchange rates
const exchangeRates = exchangeRatesRequest.getExchangeRates()
  .then(exchangeRates => console.log(exchangeRates))
  .catch(err => console.log(err));