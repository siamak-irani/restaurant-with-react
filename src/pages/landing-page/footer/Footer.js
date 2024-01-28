import React from "react";

import classes from "./Footer.module.css";

import { ReactComponent as InstagramIcon } from "../../../files/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../files/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../files/icons/facebook.svg";
import { ReactComponent as LinkInIcon } from "../../../files/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["ghazako"]}>
        <div className={classes["logo"]}>
          <h1>GHAZAKO</h1>
          <p>تمام حقوق برای غذاکو محفوظ است.</p>
        </div>
        <div className={classes["socials"]}>
          <h1>ما را دنبال کنید</h1>
          <div className={classes["icons"]}>
            <a href="#">
              <FacebookIcon
                className={`${classes["icon"]} ${classes["facebook"]}`}
              />
            </a>
            <a href="#">
              <InstagramIcon
                className={`${classes["icon"]} ${classes["instagram"]}`}
              />
            </a>
            <a href="#">
              <TwitterIcon
                className={`${classes["icon"]} ${classes["twitter"]}`}
              />
            </a>
            <a href="#">
              <LinkInIcon
                className={`${classes["icon"]} ${classes["linkedin"]}`}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes["menu"]}>
        <h1>منو</h1>
        <ul>
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">سفارش ها</a>
          </li>
          <li>
            <a href="#">خدمات</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
        </ul>
      </div>
      <div className={classes["information"]}>
        <h1>اطلاعات</h1>
        <ul>
          <li>
            <a href="#">منو</a>
          </li>
          <li>
            <a href="#">کیفیت</a>
          </li>
          <li>
            <a href="#">انتخاب کنید</a>
          </li>
          <li>
            <a href="#">سالاد با سبزیجات</a>
          </li>
          <li>
            <a href="#">تحویل فوری</a>
          </li>
          <li>
            <a href="#">دنبال کنید</a>
          </li>
        </ul>
      </div>
      <div className={classes["contact"]}>
        <h1>تماس با ما</h1>
        <ul>
          <li>0990 999 9999</li>
          <li>
            <a href="#">کاوش کنید</a>
          </li>
          <li>
            <a href="#">info@ghazako.com </a>
          </li>
          <li>Iran, Tabriz</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
