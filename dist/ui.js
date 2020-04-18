function trimName(input) {
  let outcome = '';
  outcome = input.replace(/"/g, '').replace(/,/g, ' - ');
  return outcome;
}


class UI {
  constructor() {
    this.conversionResultOutput = document.getElementById('result');
  }
  listCurrencies(listTarget, response) {
    //Set the target where to place the list of currencies - the target gets inserted as parameter of the constructor
    let currencies = Object.entries(response.currencies.currencies);
    let listOptions = '';
    let value = 1;

    currencies.forEach(function (currency) {
      listOptions += `
      <option value="${value}">${currency[1]} (${currency[0]})</option>
      `;
      value += 1;
    });
    listTarget.innerHTML = listOptions;
  }

  displayConversionResult(response) {
    this.conversionResultOutput.innerHTML = `${response.conversionResult}`;
  }
}