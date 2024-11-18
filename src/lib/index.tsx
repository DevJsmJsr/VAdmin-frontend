import { isArray, pickBy } from 'lodash';

export const cleanObject = (data: object | []): object =>
  pickBy(data, (value: object | []) => {
    if (isArray(value) && value?.length !== 0) return true;
    if (!isArray(value) && !!value) return true;
    return false;
  });