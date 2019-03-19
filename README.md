## epaygh

### A Node.js wrapper for [Epay](https://www.epaygh.com)'s API.

**Note: You need to have an official Epaygh Account to use this library.**

## Installation

```
npm install epaygh
```

## Usage

### Instantiate class:

```javascript
import { Epay } from "epaygh";

const epay = new Epay({
  merchant_key: "YOUR_MERCHANT_KEY",
  app_id: "YOUR_APP_ID",
  app_secret: "YOUR_APP_SECRET"
});
```

## Charges

### (1) Charge Via Mobile Money:

```javascript
try {
  const charge = await epay.chargeViaMobileMoney({
    amount: 1.0,
    customer_email: "customer@email.com",
    customer_name: "Customer Name",
    customer_telephone: "057XXXXXXX",
    mobile_wallet_network: "tigo",
    mobile_wallet_number: "057XXXXXXX",
    payment_method: "momo",
    reference: "000000"
  });
  console.log(charge);
} catch (err) {
  console.log(err);
}
```

### (2) Charge Via Credit Card:

```javascript
try {
  const charge = await epay.chargeViaCreditCard({
    amount: 1.0,
    customer_email: "customer@email.com",
    customer_name: "Customer Name",
    customer_telephone: "057XXXXXXX",
    payment_method: "card",
    reference: "000001"
  });
  console.log(charge);
} catch (err) {
  console.log(err);
}
```

## Customers

### (1) List Customers:

```javascript
try {
  const response = await epay.listCustomers();
  console.log(response.total);
  console.log(response.current_page);
  console.log(response.data);
} catch (err) {
  console.log(err);
}
```

## Transactions

### (1) Retrieve Transaction Details:

```javascript
try {
  const details = await epay.retrieveTransactionDetails("000001");
  console.log(details);
} catch (err) {
  console.log(err);
}
```
