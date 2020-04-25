// Currency flags: https://fabian7593.github.io/CountryAPI/

class UI {
  constructor() {
    this.conversionResultOutput = document.getElementById("amountOutput1");
    this.exchangeRateOutput = document.getElementById("exchangeRate");
    this.currencySelect1 = document.getElementById("currencySelect1");
    this.currencySelect2 = document.getElementById("currencySelect2");
    this.amountInput = document.getElementById("amountInput1");
    this.exchangeRatio = document.getElementById("exchangeRatio");
    this.originalCurrencyBar = document.getElementById("originalCurrencyBar");
    this.targetCurrencyBar = document.getElementById("targetCurrencyBar");
    this.originalCurrencyBarLabel = document.getElementById("originalCurrencyBarLabel");
    this.targetCurrencyBarLabel = document.getElementById("targetCurrencyBarLabel");
  }

  //Display in the UI (listTarget) the of currencies (response)
  listCurrencies(listTarget, response) {
    let currencies = Object.entries(response.currencies);
    let listOptions = "";
    currencies.forEach(function (currency) {
      listOptions += `
      <option value="${currency[0]}"><div id="us-flag"></div>${currency[1]} (${currency[0]})</option>
      `;
    });
    listTarget.innerHTML = listOptions;
  }

  //Get the FROM currency, TO currency and the AMOUNT to convert
  getConversionInput() {
    const fromCurrency = this.currencySelect1.options[
      this.currencySelect1.selectedIndex
    ].value;
    const toCurrency = this.currencySelect2.options[
      this.currencySelect2.selectedIndex
    ].value;
    const amountToConvert = this.amountInput.value;
    return {
      fromCurrency,
      toCurrency,
      amountToConvert,
    };
  }

  //Display in the UI the result of the performed conversion
  displayConversionResult(response) {
    this.conversionResultOutput.innerHTML = `${response.conversionResult}`;
  }

  displayexchangeRate(response) {
    this.exchangeRateOutput.innerHTML = `${response.exchangeRate}`;
  }

  //Visualise the exchange ratio
  visualiseExchangeRatio(response) {
    this.exchangeRatio.innerText = `1.00 ${this.currencySelect1.options[
      this.currencySelect1.selectedIndex
    ].value} = ${response.exchangeRate} ${this.currencySelect2.options[
      this.currencySelect2.selectedIndex
    ].value}`;

    this.originalCurrencyBarLabel.innerText = this.currencySelect1.options[
      this.currencySelect1.selectedIndex
    ].value;

    this.targetCurrencyBarLabel.innerText = this.currencySelect2.options[
      this.currencySelect2.selectedIndex
    ].value;


    let ratio = parseFloat(response.exchangeRate);
    if (ratio > 1) {
      console.log('higher');
      console.log(ratio);
      console.log(100 / ratio);
      this.originalCurrencyBar.setAttribute("style", "width: 100%");
      this.targetCurrencyBar.setAttribute("style", `width: ${100/ratio}%`);
    } else {
      console.log('lower');
      console.log(ratio);
      console.log(ratio * 100);
      this.originalCurrencyBar.setAttribute("style", `width: ${ratio*100}%`);
      this.targetCurrencyBar.setAttribute("style", "width: 100%");
    }


  }

}