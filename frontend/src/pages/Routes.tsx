import { Home } from "./Home";
import { About } from "./About";
import { Server } from "./Servers";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "server/:region",
    element: <Server />
  },
]
