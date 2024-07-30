export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  return new Int8Array(length).map((val, index) => (index === position ? value : val));
}
