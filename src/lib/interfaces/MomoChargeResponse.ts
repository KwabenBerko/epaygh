import { Customer } from "./Customer";
import { Transaction } from "./Transaction";

export interface MomoChargeResponse {
  customer: Customer;
  transaction: Transaction;
}
