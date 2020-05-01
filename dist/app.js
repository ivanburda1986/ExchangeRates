  //Initialize the UI
  const ui = new UI();
  //Initialize the Exchange Rates
  const xr = new XR();
  //Initialize Currencies
  const curr = new Currencies();
  //Initialize the Local storage
  const storage = new Storage();
  //Initialize Calculation
  const calculate = new Calculations();

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
    console.log("-------------------------");
    //Obtain the inputs: FROM currency, TO currency and the AMOUNT to convert
    const {
      from,
      to,
      amount
    } = ui.getConversionInput();

    //Save the 'FROM' and 'TO' currencies in the local storage
    storage.setCurrencies(
      from,
      to
    );

    //Check availability of "allRatesTowardsBaseCurrency{}" in the local storage
    const ratesInLocalStorage = storage.getAllRatesTowardsBaseCurrency();
    let ratesAvailabilityInLocalStorage;
    let storedRatesTimestamp;
    (function availabilityOfRatesInLocalStorage() {
      if (ratesInLocalStorage === null) {
        console.log("No exchange rates available in the local storage.");
        ratesAvailabilityInLocalStorage = "unavailable";
        storedRatesTimestamp = storage.getStoredRatesTimestamp();
      } else {
        console.log('Exchange rates available in the local storage.');
        ratesAvailabilityInLocalStorage = "available";
        storedRatesTimestamp = storage.getStoredRatesTimestamp();
      }
    })();

    //Get all rates towards the base currency
    xr.getAllRatesTowardsBaseCurrency(ratesInLocalStorage, ratesAvailabilityInLocalStorage, storedRatesTimestamp)
      .then((response) => {
        getOneRate(response.ratesTowardsBaseCurrency);
        console.log("Exchange rates for the conversion are from the: " + response.originOfRates);
        shouldAllRatesGetCached(response.ratesTowardsBaseCurrency, response.originOfRates);
      })
      .catch((err) => console.log(err));


    //Should the exchange rates be saved to the local storage? If they come from the server then they should
    function shouldAllRatesGetCached(ratesTowardsBaseCurrency, originOfRates) {
      if (originOfRates === "server") {
        storage.setAllRatesTowardsBaseCurrency(ratesTowardsBaseCurrency);
        storage.setStoredRatesTimestamp();
      } else {
        console.log("No need replace exchange rates in the local storage. They are fresh enough.")
      }
    }

    //Get the exchange rate for the FROM and TO combination of currencies
    function getOneRate(ratesTowardsBaseCurrency) {
      let exchangeRate = xr.getOneRate(ratesTowardsBaseCurrency, from, to);
      showResults(exchangeRate, from, to, amount);
    }

    //Get the conversion result and display it + display also the relative currency power
    function showResults(exchangeRate, from, to, amount) {
      let conversionResult = calculate.convert(exchangeRate, amount);
      ui.visualiseExchangeRatio(exchangeRate, from, to);
      ui.displayConversionResult(conversionResult);
    }

    e.preventDefault();
  });