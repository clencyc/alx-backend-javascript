describe('getPaymentTokenFromAPI', function() {
    it('should return a resolved promise with the correct data when success is true', function(done) {
      import('chai').then(chai => {
        const { expect } = chai;
        const getPaymentTokenFromAPI = require('./6-payment_token');
  
        getPaymentTokenFromAPI(true).then(response => {
          expect(response).to.deep.equal({ data: 'Successful response from the API' });
          done();
        }).catch(err => done(err));
      });
    });
  });
