export const objToArray = (obj) => {
  return Object.keys(obj).map((key) => ({
    _key: key,
    ...obj[key],
  }));
};
