class UI {
  constructor() {

  }

  listCurrencies(listTarget, response) {
    //Set the target where to place the list of currencies - the target gets inserted as parameter of the constructor
    let currencies = Object.keys(response.exchangeRates.rates);

    let listOptions = '';
    let value = 1;
    currencies.forEach(function (currency) {
      listOptions += `
      <option value="${value}">"${currency}"</option>
      `;
      value += 1;
    });
    listTarget.innerHTML = listOptions;
  }
}