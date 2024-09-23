// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 when inputs are 1.4 and 2.6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });

    it('should return 5 when inputs are 1.5 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -1 when inputs are 1.4 and 2.6', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.6), -1);
    });

    it('should return 0 when inputs are 2.5 and 2.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.5 when inputs are 1.4 and 2.6', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.6), 0.5);
    });

    it('should return "Error" when inputs are 1.4 and 0.4', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('should return 1 when inputs are 2.5 and 2.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
    });
  });
});
