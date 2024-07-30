export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;
  called += 1;
  weakMap.set(endpoint, called);
  const url = `${endpoint.protocol}://${endpoint.name}`;
  console.log(url);
}
