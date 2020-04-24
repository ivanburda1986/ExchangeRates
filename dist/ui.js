// Currency flags: https://fabian7593.github.io/CountryAPI/


class UI {
  constructor() {
    this.conversionResultOutput = document.getElementById('result');
    this.exchangeRateOutput = document.getElementById('exchangeRate');
    this.currencySelect1 = document.getElementById('currencySelect1');
    this.currencySelect2 = document.getElementById('currencySelect2');
    this.amountInput = document.getElementById('amountInput1');
  }

  //Display in the UI (listTarget) the of currencies (response)
  listCurrencies(listTarget, response) {
    let currencies = Object.entries(response.currencies);
    let listOptions = '';
    currencies.forEach(function (currency) {
      listOptions += `
      <option value="${currency[0]}">${currency[1]} (${currency[0]})</option>
      `;
    });
    listTarget.innerHTML = listOptions;
  }

  //Get the FROM currency, TO currency and the AMOUNT to convert
  getConversionInput() {
    const fromCurrency = this.currencySelect1.options[this.currencySelect1.selectedIndex].value;
    const toCurrency = this.currencySelect2.options[this.currencySelect2.selectedIndex].value;
    const amountToConvert = this.amountInput.value;
    return {
      fromCurrency,
      toCurrency,
      amountToConvert
    };
  }

  //Display in the UI the result of the performed conversion
  displayConversionResult(response) {
    this.conversionResultOutput.innerHTML = `${response.conversionResult}`;
  }

  displayexchangeRate(response) {
    this.exchangeRateOutput.innerHTML = `${response.exchangeRate}`;
  }
}