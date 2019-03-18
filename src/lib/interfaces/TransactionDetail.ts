import { Transaction } from "./Transaction";

export interface TransactionDetail extends Transaction {
  id: number;
  payment_no: string;
  customer_id: string;
  status: string;
  type: string;
  created_at: string;
  updated_at: string;
}
