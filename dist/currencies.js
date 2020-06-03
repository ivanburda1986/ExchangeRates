class Currencies {
  constructor() {}
  //A list of currencies which could be offered to the user - however, the offered currencies can be limtied by the config file
  async getCurrencies(currenciesToList) {
    let allCurrencies = {
      "AED": "UAE Dirham",
      "ARS": "Argentine Peso",
      "AUD": "Australian Dollar",
      "BGN": "Bulgarian Lev",
      "BRL": "Brazilian Real",
      "BSD": "Bahamian Dollar",
      "CAD": "Canadian Dollar",
      "CHF": "Swiss Franc",
      "CLP": "Chilean Peso",
      "CNY": "Chinese Renminbi",
      "COP": "Colombian Peso",
      "CZK": "Czech Koruna",
      "DKK": "Danish Krone",
      "DOP": "Dominican Peso",
      "EGP": "Egyptian Pound",
      "EUR": "Euro",
      "FJD": "Fiji Dollar",
      "GBP": "Pound Sterling",
      "GTQ": "Guatemalan Quetzal",
      "HKD": "Hong Kong Dollar",
      "HRK": "Croatian Kuna",
      "HUF": "Hungarian Forint",
      "IDR": "Indonesian Rupiah",
      "ILS": "Israeli New Shekel",
      "INR": "Indian Rupee",
      "ISK": "Icelandic Krona",
      "JPY": "Japanese Yen",
      "KRW": "South Korean Won",
      "KZT": "Kazakhstani Tenge",
      "MXN": "Mexican Peso",
      "MYR": "Malaysian Ringgit",
      "NOK": "Norwegian Krone",
      "NZD": "New Zealand Dollar",
      "PAB": "Panamanian Balboa",
      "PEN": "Peruvian Sol",
      "PHP": "Philippine Peso",
      "PKR": "Pakistani Rupee",
      "PLN": "Polish Zloty",
      "PYG": "Paraguayan Guarani",
      "RON": "Romanian Leu",
      "RUB": "Russian Ruble",
      "SAR": "Saudi Riyal",
      "SEK": "Swedish Krona",
      "SGD": "Singapore Dollar",
      "THB": "Thai Baht",
      "TRY": "Turkish Lira",
      "TWD": "New Taiwan Dollar",
      "UAH": "Ukrainian Hryvnia",
      "USD": "United States Dollar",
      "UYU": "Uruguayan Peso",
      "ZAR": "South African Rand"
    }

    //This function returns a new object with a subset of all currencies
    function reduceAnObject(initialObject, reduceToThis) {
      let outputObject = {};
      reduceToThis.forEach(function (item) {
        outputObject[item] = initialObject[item];
      });
      return outputObject;
    }

    //This variable calls the 'reduceAnObject' function and store the resulting subset of currencies
    let shortlistedCurrencies = reduceAnObject(allCurrencies, currenciesToList);

    return {
      shortlistedCurrencies
    };
  }
}