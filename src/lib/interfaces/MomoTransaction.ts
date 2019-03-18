import { Transaction } from "./Transaction";

export interface MomoTransaction extends Transaction {
  mobile_wallet_number: string;
  mobile_wallet_network: string;
}
