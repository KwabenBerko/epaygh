import { Config } from "./interfaces/Config";
import axios from "axios";
import moment from "moment";
import { Token } from "./interfaces/Token";
import { MomoCharge } from "./interfaces/MomoCharge";
import { MomoChargeResponse } from "./interfaces/MomoChargeResponse";

const EPAY_API_BASE_ENDPOINT = "https://epaygh.com/api/v1";

export class Epay {
  private token!: Token;
  constructor(private readonly config: Config) {
    if (!(config.merchant_key && config.app_id && config.app_secret)) {
      throw new Error("Invalid Configuration Object.");
    }
  }

  createToken = async (): Promise<Token> => {
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

  charge = async (data: MomoCharge): Promise<MomoChargeResponse> => {
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

  private updateTokenIfNecessary = async () => {
    try {
      if (!this.token || moment().isAfter(moment(this.token.expires_at))) {
        console.log("UPDATED.");
        const newToken = await this.createToken();
        this.token = newToken;
      }
    } catch (err) {
      throw err;
    }
  };
}
