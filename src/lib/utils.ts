import { isArray, pickBy } from 'lodash';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { tnl } from '~i18n/i18n';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const cleanObject = (data: object | []): object =>
  pickBy(data, (value: object | []) => {
    if (isArray(value) && value?.length !== 0) return true;
    if (!isArray(value) && !!value) return true;
    return false;
  });

export const createOptions = (array: string[]) =>
  array.map((item) => ({ label: tnl(item), value: item }));

export { type RequestParams, default as sendRequest } from './sendRequest';
