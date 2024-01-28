import React from "react";

import classes from "./AuthForm.module.css";
import { Form, Link, useSearchParams } from "react-router-dom";
import Button from "../../assests/Button";
import CustomInput from "../../assests/CustomInput";
import CustomLink from "../../assests/CustomLink";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div className={classes["form-container"]}>
      <Form method="post">
        <div className={classes["username-container"]}>
          <label htmlFor="username">
            {isLogin ? "نام کاربری" : "یک نام کاربری انتخاب کنید"}
          </label>
          <CustomInput name="username" id="username" type="text" />
        </div>
        <div className={classes["password-container"]}>
          <label htmlFor="password">
            {isLogin ? "رمز عبور" : "یک رمز عبور قدرتمند وارد کنید"}
          </label>
          <CustomInput name="password" id="password" type="password" />
        </div>
        {isLogin ? (
          ""
        ) : (
          <div className={classes["password-container"]}>
            <label htmlFor="password">رمز عبور خود را تکرار کنید</label>
            <CustomInput id="password" type="password" />
          </div>
        )}

        <div className={classes["form-buttons"]}>
          <Button type="submit" className="form-btn"> {isLogin ? "ورود" : "ثبت نام"}</Button>
          <CustomLink to="/" className="form-return-link">
            بازگشت
          </CustomLink>
        </div>
      </Form>
      {isLogin ? (
        <p className={classes["sign-up-link"]}>
          حساب کاربری ندارید؟{" "}
          <Link
            className={classes[".link"]}
            to={`?mode=${isLogin ? "signup" : "login"}`}
          >
            ثبت نام&nbsp;
          </Link>
          کنید.
        </p>
      ) : (
        <p className={classes["sign-up-link"]}>
          از قبل حسابی دارید؟
          <Link
            className={classes[".link"]}
            to={`?mode=${isLogin ? "signup" : "login"}`}
          >
           &nbsp;وارد
          </Link>{" "}
          شوید.
        </p>
      )}
    </div>
  );
};

export default AuthForm;
