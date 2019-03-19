import { Charge } from "./Charge";

export interface CardCharge extends Charge {
  /**
   * @property This is how you wish to charge the customer and must be set to ‘card’
   */
  payment_method: "card";
}
