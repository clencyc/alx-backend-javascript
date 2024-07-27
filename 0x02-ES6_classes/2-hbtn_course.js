export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name();
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateLength(value);
    this._length = value;
  }

  get students() {
    return [...this._students]; // Return a copy of the students array
  }

  // No setter for students - it should not be modified after creation

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students   must be an array of strings');
    }
  }
}
