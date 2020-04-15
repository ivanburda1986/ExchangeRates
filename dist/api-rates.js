class ExchangeRates {
  constructor() {
    this.apiKey = '23ed126f-4b51-46c4-afbb-63e800b3fa36';
  }

  async getExchangeRates() {
    const exchangeRatesResponse = await fetch('https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates/currencies?lang=en', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'WEB-API-key': `${this.apiKey}`
      }
    });
    const exchangeRates = await exchangeRatesResponse.json();

    return {
      exchangeRates
    }
  }
}