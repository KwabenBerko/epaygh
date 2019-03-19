export interface Charge {
  /**
   * @property This is a unique ID that represents the transaction.
   */
  reference: string;

  /**
   * @property The amount you wish to charge the customer.
   * Amount must be of type float.
   * Eg; 1.00 or 50.00
   */
  amount: number;

  /**
   * @property This is the currency code.
   * The default is GHS.
   * See our [supported currencies](https://docs.epaygh.com/docs/supported-currencies/)
   */
  currency?: string;

  /**
   * @property This is the name of the customer you are charging.
   */
  customer_name: string;

  /**
   * @property This is the email of the customer you are charging.
   */
  customer_email: string;

  /**
   * @property This is the telephone number of the customer you are charging.
   */
  customer_telephone: string;

  /**
   * @property This is the description of the payment.
   */
  payment_description?: string;
}
