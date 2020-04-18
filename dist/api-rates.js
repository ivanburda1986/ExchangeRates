class XR {
  constructor() {
    this.apiKey = "23ed126f-4b51-46c4-afbb-63e800b3fa36";
  }

  async getExchangeRates() {
    const exchangeRatesResponse = await fetch(
      "https://api.exchangeratesapi.io/latest?base=EUR");
    const exchangeRates = await exchangeRatesResponse.json();

    return {
      exchangeRates,
    };
  }
}