import axios from "axios";
import { botPrefix } from "../../config";

export enum Exchange {
  BINANCE = "BINANCE",
  KUCOIN = "KUCOIN",
}

export enum Market {
  SPOT = "SPOT",
  FUTURES = "FUTURES",
}

export interface BotModel {
  name: string;
  pricePerMonth: number;
  exchange: Exchange;
  status: boolean;
  market: Market;
  createdOn: Date;
}

export class DashBoardServices {
  static getBots = async (): Promise<Array<BotModel>> =>
    await (
      await axios.get(`${botPrefix}`)
    ).data;
}
