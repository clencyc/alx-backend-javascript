class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error(`${this.constructor.name} must override evacuationWarningMessage`);
  }
}

export default Building;
