import { Link } from "react-router-dom";
import css from "./PeopleNavigation.module.css";
import cn from "classnames"

const PeopleNavigation = ({
  counterPage,
  prevPage,
    nextPage,
  theme="dark"
}) => {

  return (
    <ul className={css.list_container}>
      <li>
        <Link to={`/people/?page=${counterPage - 1}`} className={css.link}>
          <button type="button" disabled={!prevPage} className={cn(css.btn, css[theme])}>
            PREVIOUS
          </button>
        </Link>
      </li>
      <li>
        <Link to={`/people/?page=${counterPage + 1}`} className={css.link}>
          <button type="button" disabled={!nextPage} className={cn(css.btn, css[theme])}>
            NEXT
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default PeopleNavigation;
