import { Customer } from "./Customer";
import { CardTransaction } from "./CardTransaction";

export interface CardChargeResponse {
  customer: Customer;
  transaction: CardTransaction;
  redirect_url: string;
}
