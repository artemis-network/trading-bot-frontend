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
  _id: string;
  name: string;
  pricePerMonth: number;
  exchange: Exchange;
  status: boolean;
  market: Market;
  coin: string;
  createdOn: Date;
}

export class DashBoardServices {
  static getBots = async (): Promise<Array<BotModel>> =>
    await (
      await axios.get(`${botPrefix}`)
    ).data;

  static createOrder = async (orderAmount: number): Promise<any> =>
    (await axios.post(`${botPrefix}/create-order`, { amount: orderAmount }))
      .data;

  static subscribe = async (data: any): Promise<any> =>
    (await axios.post(`${botPrefix}/subscribe`, data)).data;

  static getSubscribedbots = async (): Promise<Array<BotModel>> =>
    (await axios.get(`${botPrefix}/${localStorage.getItem("userId")}`)).data;
}
