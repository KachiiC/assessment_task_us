import { NextFunction, Request, Response } from "express";
import Cache from "node-cache";

export const serverCache = new Cache({ stdTTL: 60 * 5 });

export const serverCacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const region = req.params.region;

    if (serverCache.has(region)) {
      res.send(serverCache.get(region));
      res.status(200);

      return;
    }
    return next();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
