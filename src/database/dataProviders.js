import { FOODS, USERS } from "./data";
import { tokenGenerator } from "../util/tokenGenerator";

export function userLoginReq(userData) {
  let token = null;
  USERS.map((user) => {
    if (
      userData.username === user.username &&
      userData.password === user.password
    ) {
      token = tokenGenerator();
    }
  });
  return token;
}

const url = "ghazako/";

export function customFetch(url, method = "GET", header = {}) {
  switch (method) {
    case "GET":
      switch (url) {
        case "ghazako/iranian-foods":
          return FOODS;
      }
  }
}
