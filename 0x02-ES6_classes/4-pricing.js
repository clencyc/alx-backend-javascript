import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency.code, currency.name);
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount();
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency();
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency} (${this._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
