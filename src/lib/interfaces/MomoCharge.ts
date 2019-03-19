import { Charge } from "./Charge";

export interface MomoCharge extends Charge {
  /**
   * @property This is how you wish to charge the customer and must be set to ‘momo’.
   */
  payment_method: "momo";

  /**
   * @property This is the number of the mobile money wallet you wish to charge.
   */
  mobile_wallet_number: string;

  /**
   * @property This is the network of the mobile money wallet you wish to charge.
   */
  mobile_wallet_network: string;

  /**
   * @property Optional. This is the voucher the user generates to authorize the payment.
   */
  voucher?: string;
}
