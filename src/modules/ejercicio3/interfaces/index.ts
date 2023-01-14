import { STATES_ENUM } from '../enums';
export interface QueryFilter {
  create_time?: string;
  state?: STATES_ENUM;
  coverage?: number;
}
