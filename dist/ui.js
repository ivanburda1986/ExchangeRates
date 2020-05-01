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

  //Display in the UI (listTarget) the list of currencies (response)
  listCurrencies(listTarget, shortlistedCurrencies) {
    let currencyObjectEntries = Object.entries(shortlistedCurrencies);
    let listCurrencies = "";
    currencyObjectEntries.forEach(function (currency) {
      listCurrencies += `
      <option value="${currency[0]}"><div id="us-flag"></div>${currency[1]} (${currency[0]})</option>
      `;
    });
    listTarget.innerHTML = listCurrencies;
  }

  //Get the FROM currency, TO currency and the AMOUNT to convert
  getConversionInput() {
    const fromCurrency = this.currencySelect1.options[this.currencySelect1.selectedIndex].value;
    const toCurrency = this.currencySelect2.options[this.currencySelect2.selectedIndex].value;
    const amountToConvert = this.amountInput.value;
    return {
      fromCurrency,
      toCurrency,
      amountToConvert,
    };
  }

  //Visualise the exchange ratio
  visualiseExchangeRatio(exchangeRate, from, to) {
    this.exchangeRatio.innerText = `1.00 ${from} = ${exchangeRate} ${to}`;
    this.originalCurrencyBarLabel.innerText = from;
    this.targetCurrencyBarLabel.innerText = to;

    let ratio = parseFloat(exchangeRate);
    if (ratio > 1) {
      this.originalCurrencyBar.setAttribute("style", "width: 100%");
      this.targetCurrencyBar.setAttribute("style", `width: ${100/ratio}%`);
    } else {
      this.originalCurrencyBar.setAttribute("style", `width: ${ratio*100}%`);
      this.targetCurrencyBar.setAttribute("style", "width: 100%");
    }
  }

  //Display the conversion result 
  displayConversionResult(conversionResult) {
    this.conversionResultOutput.innerHTML = `${conversionResult}`;
  }

}