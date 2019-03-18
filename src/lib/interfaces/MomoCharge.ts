import { Charge } from "./Charge";

export interface MomoCharge extends Charge {
  payment_method: "momo";
  mobile_wallet_number: string;
  mobile_wallet_network: string;
  voucher?: string;
}
