export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error(`${this.constructor.name} must override evacuationWarningMessage`);
  }
}
