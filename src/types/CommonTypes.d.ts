import { InputHandlerProps } from '~components/index';

export interface Module {
  title: string;
  breadcrumbs?: {
    route: string;
    label: string;
  }[];
}

export type InputsInsideFunction<FilterParams> = (
  params: FilterParams
) => InputHandlerProps[];

export interface SelectData<T = unknown> {
  label: string;
  value: T;
}

export interface PaginatedParams {
  page: number;
  length: number;
  [key: string]: string | number | boolean | null;
}

export interface Registries<T> {
  data: T[];
  totalCount: number;
  isSearching: boolean;
}

export interface DataMapped {
  label: string;
  value: React.ReactNode;
  isHidden?: boolean;
}
