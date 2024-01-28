import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingSec from "./pages/landing-page/LandingSec";
import Root from "./pages/Root";

import classes from "./App.module.css";
import Categories from "./pages/categories/Categories";
import { AuthContextProvider } from "./store/auth-context";
import { OrdersContextProvider } from "./store/orders-context";
import Auth from "./pages/authentication/Auth";
import { action as authAction } from "./pages/authentication/Auth";
import { loader as tokenLoader } from "./util/auth_util";
import { action as logoutAction } from "./pages/Logout";
import MyOrders from "./pages/my-orders/MyOrders";
import { checkAuthLoader } from "./util/auth_util";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "root",
    loader: tokenLoader,
    children: [
      { path: "/", element: <LandingSec /> },

      {
        path: "/categories",

        element: <Categories />,
      },
      { path: "/orders", element: <MyOrders /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    loader: checkAuthLoader,
    action: authAction,
  },
  { path: "/logout", action: logoutAction },
]);

function App() {
  return (
    <AuthContextProvider>
      <OrdersContextProvider>
        <RouterProvider router={router} />
      </OrdersContextProvider>
    </AuthContextProvider>
  );
}

export default App;
