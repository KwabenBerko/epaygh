import { Config } from "./interfaces/Config";
import axios from "axios";
import { Token } from "./interfaces/Token";
import { MomoCharge } from "./interfaces/MomoCharge";
import { MomoChargeResponse } from "./interfaces/MomoChargeResponse";
import { CardCharge } from "./interfaces/CardCharge";
import { CardChargeResponse } from "./interfaces/CardChargeResponse.";
import { ListCustomersResponse } from "./ListCustomersResponse";
import { TransactionDetail } from "./interfaces/TransactionDetail";

const EPAY_API_BASE_ENDPOINT = "https://epaygh.com/api/v1";

export class Epay {
  private token!: Token;
  constructor(private readonly config: Config) {
    if (!(config.merchant_key && config.app_id && config.app_secret)) {
      throw new Error("Invalid Configuration Object.");
    }
  }

  /**
   * @async
   * @returns {Promise<Token>} Promise<Token>
   */
  generateToken = async (): Promise<Token> => {
    try {
      const response = await axios.post(
        `${EPAY_API_BASE_ENDPOINT}/token`,
        this.config
      );

      return response.data.data;
    } catch (err) {
      throw err;
    }
  };

  /**
   * @async
   * @param {MomoCharge} MomoCharge
   * @returns {Promise<MomoChargeResponse>} Promise<MomoChargeResponse>
   */
  chargeViaMobileMoney = async (
    data: MomoCharge
  ): Promise<MomoChargeResponse> => {
    try {
      await this.updateTokenIfNecessary();
      const response = await axios.post(
        `${EPAY_API_BASE_ENDPOINT}/charge`,
        data,
        {
          headers: {
            Authorization: `Bearer ${this.token.access_token}`
          }
        }
      );
      return response.data.data;
    } catch (err) {
      throw err;
    }
  };

  /**
   * @async
   * @param {CardCharge} CardCharge
   * @returns {Promise<CardChargeResponse>} Promise<CardChargeResponse>
   */
  chargeViaCreditCard = async (
    data: CardCharge
  ): Promise<CardChargeResponse> => {
    try {
      await this.updateTokenIfNecessary();
      const response = await axios.post(
        `${EPAY_API_BASE_ENDPOINT}/charge`,
        data,
        {
          headers: {
            Authorization: `Bearer ${this.token.access_token}`
          }
        }
      );
      return response.data.data;
    } catch (err) {
      throw err;
    }
  };

  /**
   * @async
   * @returns {Promise<ListCustomersResponse>} Promise<ListCustomersResponse>
   */
  listCustomers = async (): Promise<ListCustomersResponse> => {
    await this.updateTokenIfNecessary();
    const response = await axios.get(`${EPAY_API_BASE_ENDPOINT}/customers`, {
      headers: {
        Authorization: `Bearer ${this.token.access_token}`
      }
    });
    return response.data.customers;
  };

  /**
   * @async
   * @param {string} referencew
   * @returns {Promise<TransactionDetail>} Promise<TransactionDetail>
   */
  retrieveTransactionDetails = async (
    reference: string
  ): Promise<TransactionDetail> => {
    await this.updateTokenIfNecessary();
    const response = await axios.get(
      `${EPAY_API_BASE_ENDPOINT}/transactions/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${this.token.access_token}`
        }
      }
    );
    return response.data.transaction;
  };

  private updateTokenIfNecessary = async () => {
    try {
      if (
        !this.token ||
        Date.now() > new Date(this.token.expires_at).getTime()
      ) {
        const newToken = await this.generateToken();
        this.token = newToken;
      }
    } catch (err) {
      throw err;
    }
  };
}
