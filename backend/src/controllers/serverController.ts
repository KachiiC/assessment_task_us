import { Request, Response } from "express";
import FetchApi from "../services/fetch";
import { replaceRegionInUrl } from "../helpers/url.helpers";
import { serverCache } from "../cache/serverCache";

export const serverController = async (req: Request, res: Response) => {
  try {
    console.log('data from fetch')

    const { region } = req.params;
    const url = process.env.API_ENDPOINT || "";
    const serverUrl = replaceRegionInUrl(url, region);

    const responseData = await FetchApi(serverUrl);

    serverCache.set(region, responseData)

    res.send(responseData);
    res.status(200);
  } catch (error) {
    console.log("serverController error", error);
    res.send();
    res.status(500);
  }
};
