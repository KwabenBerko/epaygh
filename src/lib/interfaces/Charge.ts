export interface Charge {
  reference: string;
  amount: number;
  currency?: string;
  customer_name: string;
  customer_email: string;
  customer_telephone: string;
  payment_description?: string;
}
