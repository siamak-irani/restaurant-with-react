import React, { useContext } from "react";
import Navigation from "./Navigation";

import classes from "./HeaderBar.module.css";
import website_logo from "../../../files/images/ghazako-removebg-preview.png";
import CustomLink from "../../../assests/CustomLink";
import Button from "../../../assests/Button";
import { ReactComponent as ShopingBag } from "../../../files/icons/shopping_bag.svg";
import AuthContext from "../../../store/auth-context";
import { useRouteLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import OrdersContext from "../../../store/orders-context";
import ProfileBox from "./ProfileBox";

const HeaderBar = () => {
  const ordersCtx = useContext(OrdersContext);
  const token = useRouteLoaderData("root");

  return (
    <div className={classes["header-bar"]}>
      <div className={classes["logo"]}>
        <img src={website_logo}></img>
      </div>
      <Navigation />
      <div className={classes["auth-inputs"]}>
        {token && (
          <Button className="header-cart">
            <ShopingBag />
            <div className={classes["orders-num"]}>
              {ordersCtx.orders.length}
            </div>
          </Button>
        )}
        {token && (
          <Form
            className={classes["logout-form"]}
            action="/logout"
            method="post"
          >
            <Button>خروج</Button>
          </Form>
        )}
        {token && <ProfileBox />}

        {!token && (
          <CustomLink to="/auth?mode=login" className="login">
            ورود
          </CustomLink>
        )}
        {!token && (
          <CustomLink to="/auth?mode=signup" className="sign-up">
            ثبت نام
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
