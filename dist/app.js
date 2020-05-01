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

  //UI selectors
  this.amountInput = document.getElementById("amountInput1");
  const listTarget1 = document.getElementById("currencySelect1");
  const listTarget2 = document.getElementById("currencySelect2");

  //Get currencies and populate with them the selection lists
  const currencies = curr
    .getCurrencies(currenciesToList)
    .then((response) => {
      ui.listCurrencies(listTarget1, response.shortlistedCurrencies);
      ui.listCurrencies(listTarget2, response.shortlistedCurrencies);
    })
    .catch((err) => console.log(err));

  //Get from the local storage the last currencies selected by the user
  const storedCurrencies = storage.getLastCurrencies();

  //Set selected currencies in the UI to values obtained from the local storage
  document.addEventListener("DOMContentLoaded", setCurrenciesFromStorage);

  function setCurrenciesFromStorage() {
    listTarget1.value = storedCurrencies.from;
    listTarget2.value = storedCurrencies.to;
  }

  //Trigger the conversion and display of results
  amountInput.addEventListener("input", (e) => {
    execute();
  });

  listTarget1.addEventListener("change", (e) => {
    execute();
  });

  listTarget2.addEventListener("change", (e) => {
    execute();
  });