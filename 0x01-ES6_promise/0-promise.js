function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  });
}

export default getResponseFromAPI;
