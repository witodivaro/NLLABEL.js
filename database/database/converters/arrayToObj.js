export const arrayToObj = (arr) => {
  return arr.reduce((obj, el, index) => {
    const key = el._key || index;
    obj[key] = el;
    return obj;
  }, {});
};
