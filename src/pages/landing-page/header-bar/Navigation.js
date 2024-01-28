import React, { useEffect, useState } from "react";

import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as MenuICon } from "../../../files/icons/menu_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as CloseIcon } from "../../../files/icons/close_FILL0_wght400_GRAD0_opsz48.svg";

const Navigation = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleMenu = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <nav className={classes["nav"]}>
      <div onClick={toggleMenu} className={`${classes["icon"]}`}>
        {!navIsOpen ? <MenuICon /> : <CloseIcon />}
      </div>
      <ul style={{ height: navIsOpen ? "81px" : "0px" }}>
        <li>
          <Link
            onClick={() => {
              setNavIsOpen(false);
            }}
            to="/"
          >
            خانه
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setNavIsOpen(false);
            }}
            to="/orders"
          >
            سفارش شما
          </Link>
        </li>

        <li>
          <Link
            onClick={() => {
              setNavIsOpen(false);
            }}
            to="categories"
          >
            منو
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
