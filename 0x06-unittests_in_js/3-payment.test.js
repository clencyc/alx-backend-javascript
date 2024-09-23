const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;
  let expect;

  before(async function() {
    const chai = await import('chai');
    expect = chai.expect;
  });

  beforeEach(function() {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
