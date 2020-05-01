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
  }

  getAllRatesTowardsBaseCurrency() {
    let allRatesTowardsBaseCurrency = localStorage.getItem('ratesTowardsBaseCurrency');
    return JSON.parse(allRatesTowardsBaseCurrency);
  }


}