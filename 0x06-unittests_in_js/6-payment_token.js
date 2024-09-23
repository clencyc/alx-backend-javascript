// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    if (success) {
      return Promise.resolve({ data: 'Successful response from the API' });
    }
  }
  
  module.exports = getPaymentTokenFromAPI;
  