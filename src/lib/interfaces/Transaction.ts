export interface Transaction {
  reference: string;
  payment_method: string;
  description: string;
  amount: number;
  mobile_wallet_number: string;
  mobile_wallet_network: string;
}
