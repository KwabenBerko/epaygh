export interface Config {
  /**
   * @property This is a unique key related to your epay account and can be found on your dashboard under settings section.
   */
  merchant_key: string;

  /**
   * @property This is a unique ID related to your integration and can also be found on your dashboard under integration section.
   */
  app_id: string;

  /**
   * @property This is a unique key related to your integration and can also be found on your dashboard under settings section.
   */
  app_secret: string;
}
