//Initialize the Fetch request for the exchange rates
const xr = new XR;



//Initialize the UI
const ui = new UI();

//Populate the currency dropdown-selectors
const listTarget1 = document.getElementById('currencySelect1');
const listTarget2 = document.getElementById('currencySelect2');

//Get exchange rates
const exchangeRates = xr.getExchangeRates()
  .then(response => {
    ui.listCurrencies(listTarget1, response);
    ui.listCurrencies(listTarget2, response)
  })
  .catch(err => console.log(err));

//Get currency names https://currencylayer.com/documentation