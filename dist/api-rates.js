class XR {
  constructor() {
    this.apiKey = "4c0bb50d5da07a3eae9a34a8031d0e22"; //currencylayer.com
  }
  //Get a list of currencies to be offered to the user
  async getCurrencies(currenciesToList) {
    // const currenciesResponse = await fetch(
    //   `http://api.currencylayer.com/list?access_key=${this.apiKey}`);
    // const currencies = await currenciesResponse.json();

    //These are all currencies returned by the API and cached
    let allCurrencies = {
      "AED": "United Arab Emirates Dirham",
      "AFN": "Afghan Afghani",
      "ALL": "Albanian Lek",
      "AMD": "Armenian Dram",
      "ANG": "Netherlands Antillean Guilder",
      "AOA": "Angolan Kwanza",
      "ARS": "Argentine Peso",
      "AUD": "Australian Dollar",
      "AWG": "Aruban Florin",
      "AZN": "Azerbaijani Manat",
      "BAM": "Bosnia-Herzegovina Convertible Mark",
      "BBD": "Barbadian Dollar",
      "BDT": "Bangladeshi Taka",
      "BGN": "Bulgarian Lev",
      "BHD": "Bahraini Dinar",
      "BIF": "Burundian Franc",
      "BMD": "Bermudan Dollar",
      "BND": "Brunei Dollar",
      "BOB": "Bolivian Boliviano",
      "BRL": "Brazilian Real",
      "BSD": "Bahamian Dollar",
      "BTC": "Bitcoin",
      "BTN": "Bhutanese Ngultrum",
      "BWP": "Botswanan Pula",
      "BYN": "New Belarusian Ruble",
      "BYR": "Belarusian Ruble",
      "BZD": "Belize Dollar",
      "CAD": "Canadian Dollar",
      "CDF": "Congolese Franc",
      "CHF": "Swiss Franc",
      "CLF": "Chilean Unit of Account (UF)",
      "CLP": "Chilean Peso",
      "CNY": "Chinese Yuan",
      "COP": "Colombian Peso",
      "CRC": "Costa Rican Col\u00f3n",
      "CUC": "Cuban Convertible Peso",
      "CUP": "Cuban Peso",
      "CVE": "Cape Verdean Escudo",
      "CZK": "Czech Republic Koruna",
      "DJF": "Djiboutian Franc",
      "DKK": "Danish Krone",
      "DOP": "Dominican Peso",
      "DZD": "Algerian Dinar",
      "EGP": "Egyptian Pound",
      "ERN": "Eritrean Nakfa",
      "ETB": "Ethiopian Birr",
      "EUR": "Euro",
      "FJD": "Fijian Dollar",
      "FKP": "Falkland Islands Pound",
      "GBP": "British Pound Sterling",
      "GEL": "Georgian Lari",
      "GGP": "Guernsey Pound",
      "GHS": "Ghanaian Cedi",
      "GIP": "Gibraltar Pound",
      "GMD": "Gambian Dalasi",
      "GNF": "Guinean Franc",
      "GTQ": "Guatemalan Quetzal",
      "GYD": "Guyanaese Dollar",
      "HKD": "Hong Kong Dollar",
      "HNL": "Honduran Lempira",
      "HRK": "Croatian Kuna",
      "HTG": "Haitian Gourde",
      "HUF": "Hungarian Forint",
      "IDR": "Indonesian Rupiah",
      "ILS": "Israeli New Sheqel",
      "IMP": "Manx pound",
      "INR": "Indian Rupee",
      "IQD": "Iraqi Dinar",
      "IRR": "Iranian Rial",
      "ISK": "Icelandic Kr\u00f3na",
      "JEP": "Jersey Pound",
      "JMD": "Jamaican Dollar",
      "JOD": "Jordanian Dinar",
      "JPY": "Japanese Yen",
      "KES": "Kenyan Shilling",
      "KGS": "Kyrgystani Som",
      "KHR": "Cambodian Riel",
      "KMF": "Comorian Franc",
      "KPW": "North Korean Won",
      "KRW": "South Korean Won",
      "KWD": "Kuwaiti Dinar",
      "KYD": "Cayman Islands Dollar",
      "KZT": "Kazakhstani Tenge",
      "LAK": "Laotian Kip",
      "LBP": "Lebanese Pound",
      "LKR": "Sri Lankan Rupee",
      "LRD": "Liberian Dollar",
      "LSL": "Lesotho Loti",
      "LTL": "Lithuanian Litas",
      "LVL": "Latvian Lats",
      "LYD": "Libyan Dinar",
      "MAD": "Moroccan Dirham",
      "MDL": "Moldovan Leu",
      "MGA": "Malagasy Ariary",
      "MKD": "Macedonian Denar",
      "MMK": "Myanma Kyat",
      "MNT": "Mongolian Tugrik",
      "MOP": "Macanese Pataca",
      "MRO": "Mauritanian Ouguiya",
      "MUR": "Mauritian Rupee",
      "MVR": "Maldivian Rufiyaa",
      "MWK": "Malawian Kwacha",
      "MXN": "Mexican Peso",
      "MYR": "Malaysian Ringgit",
      "MZN": "Mozambican Metical",
      "NAD": "Namibian Dollar",
      "NGN": "Nigerian Naira",
      "NIO": "Nicaraguan C\u00f3rdoba",
      "NOK": "Norwegian Krone",
      "NPR": "Nepalese Rupee",
      "NZD": "New Zealand Dollar",
      "OMR": "Omani Rial",
      "PAB": "Panamanian Balboa",
      "PEN": "Peruvian Nuevo Sol",
      "PGK": "Papua New Guinean Kina",
      "PHP": "Philippine Peso",
      "PKR": "Pakistani Rupee",
      "PLN": "Polish Zloty",
      "PYG": "Paraguayan Guarani",
      "QAR": "Qatari Rial",
      "RON": "Romanian Leu",
      "RSD": "Serbian Dinar",
      "RUB": "Russian Ruble",
      "RWF": "Rwandan Franc",
      "SAR": "Saudi Riyal",
      "SBD": "Solomon Islands Dollar",
      "SCR": "Seychellois Rupee",
      "SDG": "Sudanese Pound",
      "SEK": "Swedish Krona",
      "SGD": "Singapore Dollar",
      "SHP": "Saint Helena Pound",
      "SLL": "Sierra Leonean Leone",
      "SOS": "Somali Shilling",
      "SRD": "Surinamese Dollar",
      "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
      "SVC": "Salvadoran Col\u00f3n",
      "SYP": "Syrian Pound",
      "SZL": "Swazi Lilangeni",
      "THB": "Thai Baht",
      "TJS": "Tajikistani Somoni",
      "TMT": "Turkmenistani Manat",
      "TND": "Tunisian Dinar",
      "TOP": "Tongan Pa\u02bbanga",
      "TRY": "Turkish Lira",
      "TTD": "Trinidad and Tobago Dollar",
      "TWD": "New Taiwan Dollar",
      "TZS": "Tanzanian Shilling",
      "UAH": "Ukrainian Hryvnia",
      "UGX": "Ugandan Shilling",
      "USD": "United States Dollar",
      "UYU": "Uruguayan Peso",
      "UZS": "Uzbekistan Som",
      "VEF": "Venezuelan Bol\u00edvar Fuerte",
      "VND": "Vietnamese Dong",
      "VUV": "Vanuatu Vatu",
      "WST": "Samoan Tala",
      "XAF": "CFA Franc BEAC",
      "XAG": "Silver (troy ounce)",
      "XAU": "Gold (troy ounce)",
      "XCD": "East Caribbean Dollar",
      "XDR": "Special Drawing Rights",
      "XOF": "CFA Franc BCEAO",
      "XPF": "CFP Franc",
      "YER": "Yemeni Rial",
      "ZAR": "South African Rand",
      "ZMK": "Zambian Kwacha (pre-2013)",
      "ZMW": "Zambian Kwacha",
      "ZWL": "Zimbabwean Dollar"
    }

    //This function returns just a defined subset of the all currencies, because there are too many of them
    function reduceAnObject(initialObject, reduceToThis) {
      let reductionResult = {};
      reduceToThis.forEach(function (item) {
        reductionResult[item] = initialObject[item];
      });
      return reductionResult;
    }

    //This variable stores the object obtained from the function that reduced the list of all currencies
    let currencies = reduceAnObject(allCurrencies, currenciesToList);

    return {
      currencies
    };
  }

  //Use data from cache or fetch fresh from the server?


  //Get a list of conversion rates for all currencies towards the based currency: USD
  async getExchangeRate(from, to) {
    let lastTimeObtainedServerData = 1587678521760; //This needs to get store in the local store of the browser
    let shouldRequestServerData = false;
    //Check how old the cached data is and if more than 24h give an indication that fresh should be fetched
    (function cacheFor24Hours(lastTimeObtainedServerData) {
      let currentTimestamp = new Date().getTime();
      if (currentTimestamp - lastTimeObtainedServerData >= 86400000) {
        console.log('I the cached data is older than 1 day, so I will get fresh from the server!');
        shouldRequestServerData = true;
      } else {
        console.log('The cached data is not older than 1 day, so I will use it.');
        shouldRequestServerData = false;
      }
    })(lastTimeObtainedServerData);

    //This is the cached data which is also store in the browser local storage
    let ratesTowardsBaseCurrency = {
      "success": true,
      "terms": "https:\/\/currencylayer.com\/terms",
      "privacy": "https:\/\/currencylayer.com\/privacy",
      "timestamp": 1587227706,
      "source": "USD",
      "quotes": {
        "USDAED": 3.673204,
        "USDAFN": 75.85287,
        "USDALL": 115.08965,
        "USDAMD": 482.81379,
        "USDANG": 1.788598,
        "USDAOA": 565.786041,
        "USDARS": 65.454712,
        "USDAUD": 1.571092,
        "USDAWG": 1.8,
        "USDAZN": 1.70397,
        "USDBAM": 1.798464,
        "USDBBD": 2.011862,
        "USDBDT": 84.58593,
        "USDBGN": 1.800184,
        "USDBHD": 0.37646,
        "USDBIF": 1883.908,
        "USDBMD": 1,
        "USDBND": 1.418759,
        "USDBOB": 6.870344,
        "USDBRL": 5.215356,
        "USDBSD": 0.996414,
        "USDBTC": 0.000142,
        "USDBTN": 76.17664,
        "USDBWP": 12.286988,
        "USDBYN": 2.437149,
        "USDBYR": 19600,
        "USDBZD": 2.00846,
        "USDCAD": 1.40035,
        "USDCDF": 1718.000362,
        "USDCHF": 0.96675,
        "USDCLF": 0.030924,
        "USDCLP": 853.303912,
        "USDCNY": 7.073204,
        "USDCOP": 3963.5862,
        "USDCRC": 560.57931,
        "USDCUC": 1,
        "USDCUP": 26.5,
        "USDCVE": 101.393104,
        "USDCZK": 25.06304,
        "USDDJF": 177.720394,
        "USDDKK": 6.861104,
        "USDDOP": 53.926437,
        "USDDZD": 128.10404,
        "USDEGP": 15.754482,
        "USDERN": 15.000358,
        "USDETB": 32.523126,
        "USDEUR": 0.91954,
        "USDFJD": 2.27385,
        "USDFKP": 0.79954,
        "USDGBP": 0.799392,
        "USDGEL": 3.140391,
        "USDGGP": 0.79954,
        "USDGHS": 5.664644,
        "USDGIP": 0.79954,
        "USDGMD": 51.03039,
        "USDGNF": 9516.78104,
        "USDGTQ": 7.682391,
        "USDGYD": 208.49655,
        "USDHKD": 7.75085,
        "USDHNL": 24.741149,
        "USDHRK": 6.947804,
        "USDHTG": 96.80368,
        "USDHUF": 324.770388,
        "USDIDR": 15446.314,
        "USDILS": 3.59021,
        "USDIMP": 0.79954,
        "USDINR": 76.550504,
        "USDIQD": 1189.5356,
        "USDIRR": 42105.000352,
        "USDISK": 143.920386,
        "USDJEP": 0.79954,
        "USDJMD": 137.87954,
        "USDJOD": 0.70904,
        "USDJPY": 107.56504,
        "USDKES": 106.62988,
        "USDKGS": 80.345704,
        "USDKHR": 4034.482704,
        "USDKMF": 452.850384,
        "USDKPW": 900,
        "USDKRW": 1216.240384,
        "USDKWD": 0.31175,
        "USDKYD": 0.830345,
        "USDKZT": 425.195404,
        "USDLAK": 8937.839039,
        "USDLBP": 1506.574704,
        "USDLKR": 191.31237,
        "USDLRD": 198.000348,
        "USDLSL": 18.830382,
        "USDLTL": 2.95274,
        "USDLVL": 0.60489,
        "USDLYD": 1.410207,
        "USDMAD": 10.190069,
        "USDMDL": 17.736276,
        "USDMGA": 3768.956304,
        "USDMKD": 56.657471,
        "USDMMK": 1419.896404,
        "USDMNT": 2786.444873,
        "USDMOP": 7.954759,
        "USDMRO": 357.00003,
        "USDMUR": 39.803743,
        "USDMVR": 15.420378,
        "USDMWK": 733.802304,
        "USDMXN": 23.720704,
        "USDMYR": 4.370378,
        "USDMZN": 67.265039,
        "USDNAD": 18.830377,
        "USDNGN": 385.11264,
        "USDNIO": 33.613793,
        "USDNOK": 10.329304,
        "USDNPR": 121.882304,
        "USDNZD": 1.659338,
        "USDOMR": 0.38526,
        "USDPAB": 0.996414,
        "USDPEN": 3.401839,
        "USDPGK": 3.427035,
        "USDPHP": 50.813793,
        "USDPKR": 162.76496,
        "USDPLN": 4.155904,
        "USDPYG": 6461.241304,
        "USDQAR": 3.641038,
        "USDRON": 4.446204,
        "USDRSD": 108.130373,
        "USDRUB": 74.025038,
        "USDRWF": 948.9563,
        "USDSAR": 3.756794,
        "USDSBD": 8.303902,
        "USDSCR": 17.454712,
        "USDSDG": 55.303678,
        "USDSEK": 9.98416,
        "USDSGD": 1.421804,
        "USDSHP": 0.79954,
        "USDSLL": 9705.000339,
        "USDSOS": 580.000338,
        "USDSRD": 7.458038,
        "USDSTD": 22051.386135,
        "USDSVC": 8.71908,
        "USDSYP": 514.455805,
        "USDSZL": 18.706759,
        "USDTHB": 32.538038,
        "USDTJS": 10.208275,
        "USDTMT": 3.51,
        "USDTND": 2.899038,
        "USDTOP": 2.33325,
        "USDTRY": 6.931804,
        "USDTTD": 6.732505,
        "USDTWD": 30.053038,
        "USDTZS": 2305.710304,
        "USDUAH": 26.966805,
        "USDUGX": 3761.471304,
        "USDUSD": 1,
        "USDUYU": 43.558621,
        "USDUZS": 10097.701038,
        "USDVEF": 9.987504,
        "USDVND": 23340.69,
        "USDVUV": 121.150783,
        "USDWST": 2.738194,
        "USDXAF": 603.17885,
        "USDXAG": 0.065807,
        "USDXAU": 0.000594,
        "USDXCD": 2.70255,
        "USDXDR": 0.729931,
        "USDXOF": 603.17885,
        "USDXPF": 109.66437,
        "USDYER": 250.350364,
        "USDZAR": 18.798404,
        "USDZMK": 9001.203593,
        "USDZMW": 18.558253,
        "USDZWL": 322.000001
      }
    }
    //Checks whether freshed data should be fetched - if yes, then it retrieves it from the server
    if (shouldRequestServerData === true) {
      const getRatesTowardsBaseCurrencyRequest = await fetch(`http://api.currencylayer.com/live?access_key=${this.apiKey}`);
      ratesTowardsBaseCurrency = await getRatesTowardsBaseCurrencyRequest.json();
      console.log('I have used fresh exchange rates from the server!');
    } else {
      console.log('I have used exchange rates from the chache!');
    }

    //Calculates the conversion rate for the chose currencies and returns it
    const baseCurrency = ratesTowardsBaseCurrency.source;
    let exchangeRate = '';
    (function calculateExchangeRate(from, to) {
      exchangeRate = (ratesTowardsBaseCurrency.quotes[baseCurrency + to] / ratesTowardsBaseCurrency.quotes[baseCurrency + from]).toFixed(2);
    })(from, to)

    return {
      exchangeRate
    }

  }

  //Perform the conversion between two currencies specified by the user
  convert(exchangeRate, amount) {
    let conversionResult = (exchangeRate.exchangeRate * amount).toFixed(2);
    return {
      conversionResult
    }
  }

}