import { serverCacheMiddleware } from "../cache/serverCache";
import { serverController } from "../controllers/serverController";
import { IRouterRoute } from "./router.types";

export const routes: IRouterRoute[] = [
  {
    method: "get",
    path: "/server/:region",
    controller: serverController,
    middleware: serverCacheMiddleware
  }
];
