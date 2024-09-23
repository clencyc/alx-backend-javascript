// 5-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log the correct message and call console.log once for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should log the correct message and call console.log once for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 20');
  });
});
