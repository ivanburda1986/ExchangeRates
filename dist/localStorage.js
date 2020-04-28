class Storage {
  constructor() {
    this.from;
    this.to;
    this.defaultFrom = 'EUR';
    this.defaultTo = 'USD';
    this.timestamp = 0;
    this.setDefaultTimestamp;
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
    console.log('Currencies saved in the local storage.')
  }

  getLastXRFetchTimestamp() {
    if (localStorage.getItem('XRFetchTimestamp') === 'undefined') {
      this.timestamp = 0;
    } else {
      this.timestamp = localStorage.getItem('XRFetchTimestamp');
    }
    return {
      timestamp: this.timestamp
    }
  }

  setXRFetchTimestamp(timestamp) {
    localStorage.setItem('XRFetchTimestamp', timestamp);
  }
}