import css from "./Layout.module.css";
import spaceStation from "../../assets/svg/space-station.svg";
import lightsaber from "../../assets/svg/lightsaber.svg";
import droid from "../../assets/svg/droid.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import Favorite from "../../components/Favorite/Favorite";

const Layout = () => {
  const isTheme = useTheme();

  return (
    <>
      <div className={css.container}>
        <img
          src={
            isTheme.theme === "light"
              ? lightsaber
              : isTheme.theme === "dark"
                ? droid
                : spaceStation
          }
          alt="logo"
          className={css.logo}
        />
        <nav className={css.nav}>
          <ul className={css.list_container}>
            <li className={css.list_item}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink to="/people/?page=1">People</NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink to="/fail">Fail</NavLink>
            </li>
            <li className={css.list_item}>
              <NavLink to="/not-found">Not Found</NavLink>
            </li>
          </ul>
        </nav>

        <Favorite />
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
