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
  }

  getLastXRFetchTimestamp() {
    this.timestamp = localStorage.getItem('XRFetchTimestamp');
    return {
      timestamp: this.timestamp
    }
  }

  initXRFetchTimestamp() {
    if (localStorage.getItem('XRFetchTimestamp') === null) {
      localStorage.setItem('XRFetchTimestamp', 100);
    } else
      console.log(localStorage.getItem('XRFetchTimestamp'));
  }

  setXRFetchTimestamp(timestamp) {
    localStorage.setItem('XRFetchTimestamp', timestamp);
  }
}