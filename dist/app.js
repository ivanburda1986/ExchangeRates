//Initialize the UI
const ui = new UI();

//Initialize the class with methods related to the currency conversions
const xr = new XR();

//Get currencies and populate with them the selection lists
const listTarget1 = document.getElementById('currencySelect1');
const listTarget2 = document.getElementById('currencySelect2');
const currencies = xr.getCurrencies(supportedCurrencies)
  .then(response => {
    ui.listCurrencies(listTarget1, response);
    ui.listCurrencies(listTarget2, response)
  })
  .catch(err => console.log(err));

//Get the conversion for 2 chosen currencies, Convert the specified amount, Display the conversion result
document.getElementById('convert-button').addEventListener('click', (e) => {

  //-Obtain the inputs: from currency, to currency, amount to convert
  const conversionInputs = ui.getConversionInput();

  //-Obtain the exchange rate for the 2 chosen currencies and display it
  xr.getExchangeRate(conversionInputs.fromCurrency, conversionInputs.toCurrency)
    .then(response => {
      ui.displayexchangeRate(response);
      //Once the exchange rate is delivered then pass it to the function which does the conversion and displays the result
      convert(response);
    })
    .catch(err => console.log(err));

  //-Request the conversion and display the result  
  function convert(exchangeRate) {
    let conversionResult = xr.convert(exchangeRate, conversionInputs.amountToConvert);
    ui.displayConversionResult(conversionResult);
  }

  //Visualise exchange ratio
  ui.visualiseExchangeRatio();

  e.preventDefault();
});