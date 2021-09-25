export function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function isElementVisible(el) {
  const rect = el.getBoundingClientRect();

  return rect.bottom > 0 && rect.top < window.innerHeight;
}

export const getFormDataFromObj = (obj) => {
  const formData = new FormData();

  Object.keys(obj).forEach((key) => {
    if (obj[key].file) {
      formData.append(key, obj[key].file);
    } else {
      formData.append(key, obj[key]);
    }
  });

  return formData;
};

export const getUpdatedArray = (arr, el, uniqueField) => {
  return arr.map((currentEl) => {
    if (currentEl[uniqueField] !== el[uniqueField]) return currentEl;

    return el;
  });
};

export const parseObjNumbers = (obj) => {
  return Object.keys(obj).reduce((newObj, key) => {
    if (typeof obj[key] === "object") {
      newObj[key] = parseObjNumbers(obj[key]);
    } else if (!isNaN(+obj[key])) {
      newObj[key] = Math.floor(+obj[key]);
    } else {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
};

export const multiplyInt = (int, multiplier) => {
  return Math.floor(int * multiplier);
};
