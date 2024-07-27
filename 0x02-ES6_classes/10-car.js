export default class Car {
  constructor(brand, motor, model) {
    this._brand = brand;
    this._motor = motor;
    this._model = model;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  cloneCar() {
    const clonedCar = new this.constructor();

    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key) && key.startsWith('_')) {
        clonedCar[key] = this[key];
      }
    }
    return clonedCar;
  }
}
