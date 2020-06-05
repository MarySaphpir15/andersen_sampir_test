import { responseType } from '../responseType';

export function findKeyValue(object: responseType, requestedKey: string): responseType {
  let value;
  Object.keys(object).find(function(k) {
    if (k === requestedKey) {
      value = object[k];
      return;
    }
    if (object[k] && (object[k] instanceof Object || object[k] instanceof Array)) {
      value = findKeyValue(object[k], requestedKey);
      return value !== undefined;
    }
  });
  return value;
}
