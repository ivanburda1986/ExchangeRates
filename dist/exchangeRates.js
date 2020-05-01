class XR {
  constructor() {
    this.apiKey = "4c0bb50d5da07a3eae9a34a8031d0e22"; //currencylayer.com
  }

  //Get a list of server or cached conversion rates for all currencies towards the based currency: USD
  async getAllRatesTowardsBaseCurrency(ratesInLocalStorage, ratesAvailableInLocalStorage, storedRatesTimestamp, exchangeRatesMaxCacheAge) {
    let ratesTowardsBaseCurrency = ratesInLocalStorage;
    let shouldRequestServerData;
    let originOfRates;

    //Check how old the exchange rates in the local storage are. If older than the max acceptable age then set "shouldRequestServerData":"true"
    (function requestServerDataOrNot() {

      if (ratesAvailableInLocalStorage === "unavailable") {
        shouldRequestServerData = true;
      } else if (ratesAvailableInLocalStorage === "available") {
        let lastServerDataTimestamp = storedRatesTimestamp;
        console.log("Timestamp of the exchange rates in the local storage: " + lastServerDataTimestamp);
        let currentTimestamp = new Date().getTime();
        console.log(`Current timestamp is: ${currentTimestamp}`);
        console.log(`Max cache age: ${exchangeRatesMaxCacheAge}`);
        let timestampDifference = parseInt((currentTimestamp - lastServerDataTimestamp) / 1000);
        console.log(`Server exchange rates were last saved to the local storage: ${timestampDifference} seconds ago.`);
        if (timestampDifference >= exchangeRatesMaxCacheAge) { //Maximum acceptable age of the chaged exchange rates - in seconds
          console.log(
            "The cached data is older than the set maximum, so I will get fresh from the server!"
          );
          shouldRequestServerData = true;
        } else {
          console.log(
            "The cached data is not older than the set maximum, so I will use it."
          );
          shouldRequestServerData = false;
        }
      }
    })();

    //Retrieves either fresh exchange rates from the server or advises to use the cached data. Returns fresh data if it should be used. Returns origin of the data (cached OR server)
    if (shouldRequestServerData === true) {
      const getServerData = await fetch(
        `http://api.currencylayer.com/live?access_key=${this.apiKey}`
      );
      ratesTowardsBaseCurrency = await getServerData.json();
      //console.log("I have used fresh exchange rates from the server!");
      originOfRates = 'server';
    } else {
      //console.log("I have used exchange rates from the chache!");
      originOfRates = 'cache';
    }

    return {
      ratesTowardsBaseCurrency,
      originOfRates
    };
  }

  //Returns an exchange rate for the two selected currencies
  getOneRate(ratesTowardsBaseCurrency, from, to) {
    const baseCurrency = ratesTowardsBaseCurrency.source;
    let exchangeRate = "";
    (function calculateExchangeRate(from, to) {
      exchangeRate = (
        ratesTowardsBaseCurrency.quotes[baseCurrency + to] /
        ratesTowardsBaseCurrency.quotes[baseCurrency + from]
      ).toFixed(2);
    })(from, to);
    return exchangeRate;
  }
}