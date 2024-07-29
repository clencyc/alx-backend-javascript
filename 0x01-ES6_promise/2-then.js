function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log('Got a response form the API');
      return {
        status: 200,
        body: 'success',
      };
    });
}

export default handleResponseFromAPI;
