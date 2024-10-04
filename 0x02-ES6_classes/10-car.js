export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(value) {
    this._brand = value;
  }

  get brand() {
    return this._brand;
  }

  set motor(value) {
    this._motor = value;
  }

  get motor() {
    return this._motor;
  }

  set color(value) {
    this._color = value;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
