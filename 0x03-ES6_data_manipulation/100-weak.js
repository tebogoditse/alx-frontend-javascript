export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 1);
  } else {
    const endpointData = weakMap.get(endpoint);
    if (endpointData >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (endpointData + 1));
  }
};
