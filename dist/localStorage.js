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

    return {
      from: this.from,
      to: this.to
    }
  }

  setCurrencies(from, to) {
    localStorage.setItem('from', from);
    localStorage.setItem('to', to);
  }

  setAllRatesTowardsBaseCurrency(allRatesTowardsBaseCurrency) {
    localStorage.setItem('ratesTowardsBaseCurrency', JSON.stringify(allRatesTowardsBaseCurrency));
    console.log("Server rates have been saved to the local storage");
  }

  getAllRatesTowardsBaseCurrency() {
    let allRatesTowardsBaseCurrency = localStorage.getItem('ratesTowardsBaseCurrency');
    console.log("Rates have been loaded from the local storage");
    return JSON.parse(allRatesTowardsBaseCurrency);
  }


}