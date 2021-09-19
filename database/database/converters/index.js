import { arrayToObj } from "./arrayToObj";
import { objToArray } from "./objToArray";

export const converters = {
  array: (data) => {
    if (data instanceof Array) return data;
    if (data instanceof Object) return objToArray(data);
  },
  object: (data) => {
    if (data instanceof Object) return data;
    if (data instanceof Array) return arrayToObj(data);
  },
};
