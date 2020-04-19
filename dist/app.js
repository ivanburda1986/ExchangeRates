//Initialize the UI
const ui = new UI();

//Initialize the class with methods related to the currency conversions
const xr = new XR();

//Get currencies and populate with them the selection lists
const listTarget1 = document.getElementById('currencySelect1');
const listTarget2 = document.getElementById('currencySelect2');

const currencies = xr.getCurrencies(['CZK', 'USD', 'EUR', 'PLN', 'ISK'])
  .then(response => {
    ui.listCurrencies(listTarget1, response);
    ui.listCurrencies(listTarget2, response)
  })
  .catch(err => console.log(err));

//Convert an amount and display the result
document.getElementById('convert-button').addEventListener('click', (e) => {
  //Obtain the inputs: from currency, to currency, amount to converst - and save them into the variable
  const conversionInputs = ui.getConversionInput();

  //Pass the inputs into the conversion function
  xr.convert(conversionInputs.fromCurrency, conversionInputs.toCurrency, conversionInputs.amountToConvert)
    .then(response => {
      //And use another function to display the results of the conversion
      ui.displayConversionResult(response);
    })
    .catch(err => console.log(err));
  e.preventDefault();
});