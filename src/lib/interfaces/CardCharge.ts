import { Charge } from "./Charge";

export interface CardCharge extends Charge {
  payment_method: "card";
}
