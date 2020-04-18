//Initialize the UI
const ui = new UI();

//Populate the currency dropdown-selectors
const listTarget1 = document.getElementById('currencySelect1');
const listTarget2 = document.getElementById('currencySelect2');

//Initialize the class with methods related to the currency conversions
const xr = new XR();

//Get currencies and populate with them the selection lists
const currencies = xr.getCurrencies()
  .then(response => {
    ui.listCurrencies(listTarget1, response);
    ui.listCurrencies(listTarget2, response)
  })
  .catch(err => console.log(err));


//Request a conversion -- Unfortunately not supported by the Free Plan
// const conversion = xr.convert('USD', 'GBP', 1)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => console.log(err));


//Convert an amount
const conversion = xr.convert('CZK', 'PLN', 100)
  .then(response => {
    ui.displayConversionResult(response);
  })
  .catch(err => console.log(err));