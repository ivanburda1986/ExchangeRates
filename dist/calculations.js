class Calculations {
  //Calculate the conversion result
  convert(exchangeRate, amount) {
    let conversionResult = (exchangeRate * amount).toFixed(2);
    return conversionResult;
  }
}