import {createBrowserRouter} from "react-router-dom";

import {Home} from "@/pages/home";
import {Products} from "@/pages/products";

export const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/products", element: <Products />},
]);
