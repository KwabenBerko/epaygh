import { Customer } from "./interfaces/Customer";

export interface ListCustomersResponse {
  current_page: number;
  data: Array<Customer>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: number;
  to: number;
  total: number;
}
