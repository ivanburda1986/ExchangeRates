class Storage {
  constructor() {
    this.from;
    this.to;
    this.defaultFrom = 'EUR';
    this.defaultTo = 'USD';
  }
  getLastCurrencies() {
    if (localStorage.getItem('from') === null) {
      this.from = this.defaultFrom;
    } else {
      this.from = localStorage.getItem('from');
    }

    if (localStorage.getItem('to') === null) {
      this.to = this.defaultTo;
    } else {
      this.to = localStorage.getItem('to');
    }

    console.log("Initialised selected currencies.")
    return {
      from: this.from,
      to: this.to
    }
  }

  setCurrencies(from, to) {
    localStorage.setItem('from', from);
    localStorage.setItem('to', to);
    console.log("Selected currencies have been saved to the local storage.")
  }

  setAllRatesTowardsBaseCurrency(allRatesTowardsBaseCurrency) {
    localStorage.setItem('ratesTowardsBaseCurrency', JSON.stringify(allRatesTowardsBaseCurrency));
    console.log("Fresh exchange rates from the server have been saved to the local storage.");
  }

  getAllRatesTowardsBaseCurrency() {
    let allRatesTowardsBaseCurrency = localStorage.getItem('ratesTowardsBaseCurrency');
    console.log("Loading exchange rates from the local storage...");
    return JSON.parse(allRatesTowardsBaseCurrency);
  }

  setStoredRatesTimestamp() {
    localStorage.setItem('storedRatesTimestamp', new Date().getTime());
  }

  getStoredRatesTimestamp() {
    let timestamp = localStorage.getItem('storedRatesTimestamp');
    return timestamp;
  }
}