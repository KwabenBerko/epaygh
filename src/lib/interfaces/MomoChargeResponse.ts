import { Customer } from "./Customer";
import { MomoTransaction } from "./MomoTransaction";

export interface MomoChargeResponse {
  customer: Customer;
  transaction: MomoTransaction;
}
