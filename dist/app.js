  //Initialize the UI
  const ui = new UI();
  //Initialize the Exchange Rates
  const xr = new XR();
  //Initialize Currencies
  const curr = new Currencies();
  //Initialize the Local storage
  const storage = new Storage();


  //Get currencies and populate with them the selection lists
  const listTarget1 = document.getElementById("currencySelect1");
  const listTarget2 = document.getElementById("currencySelect2");
  const currencies = curr
    .getCurrencies(currenciesToList)
    .then((response) => {
      ui.listCurrencies(listTarget1, response.shortlistedCurrencies);
      ui.listCurrencies(listTarget2, response.shortlistedCurrencies);
    })
    .catch((err) => console.log(err));

  //Get last currencies from the local storage
  const storedCurrencies = storage.getLastCurrencies();
  //Set selected currencies to values obtained from the local storage
  document.addEventListener("DOMContentLoaded", setCurrenciesFromStorage);

  function setCurrenciesFromStorage() {
    listTarget1.value = storedCurrencies.from;
    listTarget2.value = storedCurrencies.to;
  }

  //Convert the amount between the two selected currencies and display the results
  document.getElementById("convert-button").addEventListener("click", (e) => {
    //Obtain the inputs: FROM currency, TO currency and the AMOUNT to convert
    const conversionInputs = ui.getConversionInput();

    //Save the 'FROM' and 'TO' currencies in the local storage
    storage.setCurrencies(
      conversionInputs.fromCurrency,
      conversionInputs.toCurrency
    );

    //Obtain the exchange rate for the 2 chosen currencies -> request to display it; -> pass it to the conversion function
    xr.getExchangeRate(conversionInputs.fromCurrency, conversionInputs.toCurrency)
      .then((response) => {
        //Request the conversion - provide the function with the exchange rate
        convert(response.exchangeRate);
        //Request displaying the exchange rate and relative currency powers
        ui.visualiseExchangeRatio(response.exchangeRate, conversionInputs.fromCurrency, conversionInputs.toCurrency);
      })
      .catch((err) => console.log(err));

    //Convert the amount and display the result
    function convert(exchangeRate) {
      let conversionResult = xr.convert(exchangeRate, conversionInputs.amountToConvert);
      ui.displayConversionResult(conversionResult);
    }

    e.preventDefault();
  });



  xr.getAllRatesTowardsBaseCurrency();



  storage.initXRFetchTimestamp();
  //Get last XR-fetch timestamp from the local storage
  const XRFetchTimestamp = storage.getLastXRFetchTimestamp();