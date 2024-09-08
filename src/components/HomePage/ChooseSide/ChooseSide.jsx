import css from "./ChooseSide.module.css";
import cn from "classnames";
import light from "../../../assets/img/light.png";
import dark from "../../../assets/img/dark.png";
import falcon from "../../../assets/img/falcon.png";

import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
  useTheme,
} from "../../../context/ThemeProvider";

const ChooseSide = () => {
  const isTheme = useTheme();

  return (
    <div>
      <h1 className="header_text">Chosse</h1>

      <ul className={css.list}>
        <li className={cn(css.item, css.item_light)}>
          <p className={css.item_header}>Light Side</p>
          <img
            src={light}
            alt="ight theme"
            className={css.item_img}
            onClick={() => isTheme.change(THEME_LIGHT)}
          />
        </li>
        <li className={cn(css.item, css.item_dark)}>
          <p className={css.item_header}>Dark Side</p>
          <img
            src={dark}
            alt="dark theme"
            className={css.item_img}
            onClick={() => isTheme.change(THEME_DARK)}
          />
        </li>
        <li className={cn(css.item, css.item_neitral)}>
          <p className={css.item_header}>I`m Han Solo</p>
          <img
            src={falcon}
            alt="neitral theme"
            className={css.item_img}
            onClick={() => isTheme.change(THEME_NEITRAL)}
          />
        </li>
      </ul>
    </div>
  );
};

export default ChooseSide;
