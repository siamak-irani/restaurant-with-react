import React, { useContext } from "react";

import classes from "./Auth.module.css";
import { redirect } from "react-router-dom";
import { tokenGenerator } from "../../util/tokenGenerator";
import { userLoginReq } from "../../database/dataProviders";
import AuthContext from "../../store/auth-context";
import AuthForm from "./AuthForm"
import restaurant from "../../files/images/restaurant.PNG"

const Auth = () => {

  return (
    <div className={classes["auth-page"]}>
      <div className={classes["auth--card"]}>
        <div className={classes["form-container"]}>
          <AuthForm />
        </div>
        <div className={classes["auth--image"]}>
          <img src={restaurant}></img>
        </div>
      </div>
    </div>
  );
};

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const data = await request.formData();

  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };

  switch (mode) {
    case "signup":
      // return redirect("/auth?mode=login");
      return redirect("/");
    case "login":
      if (localStorage.getItem("token")) {
        return redirect("/");
      } else {
        const token = userLoginReq(authData);
        if (token) {
          localStorage.setItem("token", token);
          return redirect("/");
        } else {
          console.log("This user does not exist.");
        }
      }
  }

  return null;
}

export default Auth;
