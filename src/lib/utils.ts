import { isArray, pickBy } from 'lodash';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const cleanObject = (data: object | []): object =>
  pickBy(data, (value: object | []) => {
    if (isArray(value) && value?.length !== 0) return true;
    if (!isArray(value) && !!value) return true;
    return false;
  });

export { type RequestParams, default as sendRequest } from './sendRequest';
