import chelo_jujeh from "../files/images/categories/iranian-foods/chelo-jujeh.PNG";
import chelo_kabab from "../files/images/categories/iranian-foods/chelo-kabab.PNG";
import chelo_morgh from "../files/images/categories/iranian-foods/chelo-morgh.PNG";
import geymeh from "../files/images/categories/iranian-foods/geymeh.PNG";
import ghormeh_sabzi from "../files/images/categories/iranian-foods/ghormeh-sabzi.PNG";

export const FOODS = [
  [
    {
      header: "غذاهای ایرانی",
      class: "iranian-foods",
      path: "iranian-foods",
    },
    {
      id: "chelo_jujeh",
      title: "چلو جوجه کباب",
      src: chelo_jujeh,
      score: {
        count: "344",
        num: "4.5",
      },
      price: "120000",
    },
    {
      id: "chelo_kabab",
      title: "چلو کباب",
      src: chelo_kabab,
      score: {
        count: "875",
        num: "4.6",
      },
      price: "125000",
    },
    {
      id: "geymeh",
      title: "چلو قیمه",
      src: geymeh,
      score: {
        count: "465",
        num: "4.3",
      },
      price: "114000",
    },
    {
      id: "chelo_morgh",
      title: "چلو مرغ",
      src: chelo_morgh,
      score: {
        count: "234",
        num: "4.7",
      },
      price: "134000",
    },
    {
      id: "ghormeh_sabzi",
      title: "قورمه سبزی",
      src: ghormeh_sabzi,
      score: {
        count: "676",
        num: "4.9",
      },
      price: "129000",
    },
  ],
];

export const USERS = [{ username: "m", password: "m" }];