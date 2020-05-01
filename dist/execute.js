function execute() {

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

}