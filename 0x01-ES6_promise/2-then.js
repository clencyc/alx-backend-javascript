function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response form the API');
      return {
        status: 200,
        body: 'success',
      };
    });
}

export default handleResponseFromAPI;
